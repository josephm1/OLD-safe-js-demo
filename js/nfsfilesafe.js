//Intial function
"Use strict";

var auth = localStorage.getItem("auth");
var file = document.getElementById("file");
var newname = document.getElementById("newname");
var filepath = document.getElementById("filepath");
var fileshow = document.getElementById('fileshow');

window.document.getElementById("createorupdatefile").addEventListener("click", function() {
  createorupdatefile();
});
window.document.getElementById("getfile").addEventListener("click", function() {
  getfile();
});
window.document.getElementById("getfilemetadata").addEventListener("click", function() {
  getfilemetadata();
});
window.document.getElementById("renamefile").addEventListener("click", function() {
  renamefile();
});
/*window.document.getElementById("movefile").addEventListener("click", function() {
  movefile();
});*/
window.document.getElementById("deletefile").addEventListener("click", function() {
  deletefile();
});


//createorupdatefile
function createorupdatefile() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  console.log();
  window.safeNFS.createOrUpdateFile(auth, filepath.value, file.files[0], "blob", file.files[0].length, window.btoa(file.files[0]), false)
    .then((createOrUpdateFileRes) => {
        console.log(createOrUpdateFileRes);
      },
      (err) => {
        console.log(err);
      });
}



//deletefile
function deletefile() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.deleteFile(auth, filepath.value, isPathShared = false)
    .then((deleteFileRes) => {
        console.log(deleteFileRes);
      },
      (err) => {
        console.log(err);
      });
}



//getfile
function getfile() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.getFile(auth, filepath.value, "blob", isPathShared = false)
    .then((getFileRes) => {
        //  console.log(getFileRes);

        //converts blob to file
        var file = new File([getFileRes], filepath.value);
        console.log(file.name.split('.').pop());
        console.log(file.type);

        switch (file.name.split('.').pop()) {
          //text
          case "txt":
          case "html":
          case "htm":
          case "css":
          case "js":
          case "json":
          case "md":
          case "odt":
          case "rtf":
          case "csv":
            readAsText();
            break;
            //images
          case "jpg":
          case "jpeg":
          case "png":
          case "gif":
          case "tiff":
          case "tif":
          case "ico":
          case "webp":
          case "svg":
          case "bmp":
            readAsImage();
            break;
            //audio
          case "mp3":
          case "oga":
          case "wav":
            readAsAudio();
            break;
            //video
          case "mp4":
          case "ogv":
          case "ogg":
          case "webm":
            readAsVideo();
            break;
          default:
            //default
            default();
        }


        function readAsText() {
          //reads file as text
          var reader = new FileReader();
          reader.onload = function() {
            fileshow.innerHTML = '<textarea id="textarea" class="materialize-textarea">' + this.result + '</textarea>';
            $('textarea').each(function() {
              $(this).height($(this).prop('scrollHeight'));
            });

          }
          reader.readAsText(file)
        }

        //reads file as image
        function readAsImage() {
          fileReader = new FileReader();
          fileReader.onload = function(event) {
            fileshow.innerHTML = '<img class="responsive-img" src="' + this.result + '"></img>'
          };
          fileReader.readAsDataURL(file);

        }

        //reads file as audio
        function readAsAudio() {
          fileshow.innerHTML = '<audio id="sound" controls></audio>'
          var sound = document.getElementById('sound');
          sound.src = URL.createObjectURL(file);
        }



        //reads file as video
        function readAsVideo() {
          fileReader = new FileReader();
          fileReader.onload = function(event) {
            fileshow.innerHTML = '<video class="responsive-video" controls><source src="' + this.result + '" type="video/mp4">Your browser does not support the video tag.</video>';
          };
          fileReader.readAsDataURL(file);
        }

        //default
            function default() {
             fileshow.innerHTML = '<form method="get" action="'+ file.name +'"><button class="waves-effect waves-light btn blue" type="submit">Download file</button></form>'              
      }

      },
      (err) => {
        console.log(err);
      });
}

//getfilemetadata
function getfilemetadata() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.getFileMetadata(auth, filepath.value, isPathShared = false)
    .then((getFileMetaDataRes) => {
        console.log(getFileMetaDataRes);
      },
      (err) => {
        console.log(err);
      });
}

/*
//movefile
function movefile() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.moveFile(auth, srcRootPath, srcPath, destRootPath, destPath, action = 'move')
    .then((moveFileRes) => {
        console.log(moveFileRes);
      },
      (err) => {
        console.log(err);
      });
}*/

//renamefile
function renamefile() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.renameFile(auth, filepath.value, newname.value, window.btoa(file.files[0]), isPathShared = false)
    .then((renameFileRes) => {
        console.log(renameFileRes);
      },
      (err) => {
        console.log(err);
      });
}
