//Intial function
"Use strict";

var auth = localStorage.getItem("auth");
var file = document.getElementById("file").files[0];
var newname = document.getElementById("newname").value;
var filepath = document.getElementById("filepath").value;

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
window.document.getElementById("movefile").addEventListener("click", function() {
  movefile();
});
window.document.getElementById("deletefile").addEventListener("click", function() {
  deletefile();
});


//createorupdatefile
function createorupdatefile() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  console.log();
  window.safeNFS.createOrUpdateFile(auth, filepath, file, dataType = 'text/plain')
    .then((createOrUpdateFileRes) => {
        console.log(createOrUpdateFileRes);
      },
      (err) => {
        console.error(err);
      });
}



//deletefile
function deletefile() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.deleteFile(auth, filepath, isPathShared = false)
    .then((deleteFileRes) => {
        console.log(deleteFileRes);
      },
      (err) => {
        console.error(err);
      });
}



//getfile
function getfile() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.getFile(auth, filepath, responseParsing = 'text', isPathShared = false)
    .then((getFileRes) => {
        console.log(getFileRes);
        this.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(getFileRes);
      },
      (err) => {
        console.error(err);
      });
}

//getfilemetadata
function getfilemetadata() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.getFileMetaData(auth, filepath, isPathShared = false)
    .then((getFileMetaDataRes) => {
        console.log(getFileMetaDataRes);
      },
      (err) => {
        console.error(err);
      });
}

//getfilemetadata
function movefile() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.moveFile(auth, srcRootPath, srcPath, destRootPath, destPath, action = 'move')
    .then((moveFileRes) => {
        console.log(moveFileRes);
      },
      (err) => {
        console.error(err);
      });
}

//getfilemetadata
function renamefile() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.renameFile(auth, filepath, newname, metadata, isPathShared = false)
    .then((renameFileRes) => {
        console.log(renameFileRes);
      },
      (err) => {
        console.error(err);
      });
}