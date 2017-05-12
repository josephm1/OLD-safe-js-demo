//Intial function
"Use strict";

var auth = localStorage.getItem("auth");
var dirpath = document.getElementById("dirpath");
var newname = document.getElementById("newname");
var appordrive = function() {
  if (document.getElementById('drive').checked) {
    return true;
  } else if (document.getElementById('app').checked) {
    return false;
  }
};
var privorpub = function() {
  if (document.getElementById('private').checked) {
    return true;
  } else if (document.getElementById('public').checked) {
    return false;
  }
};

window.document.getElementById("createdir").addEventListener("click", function() {
  createdir();
});
window.document.getElementById("getdir").addEventListener("click", function() {
  getdir();
});
window.document.getElementById("renamedir").addEventListener("click", function() {
  renamedir();
});
window.document.getElementById("deletedir").addEventListener("click", function() {
  deletedir();
});
/*window.document.getElementById("movedir").addEventListener("click", function() {
  movedir();
});*/

//createdir
function createdir() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.createDir(auth, dirpath.value, privorpub(), window.btoa(dirpath.value), appordrive())
    .then((createDirRes) => {
        console.log(createDirRes);
      },
      (err) => {
        console.log(err);
      });
}
//deletedir
function deletedir() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.deleteDir(auth, dirpath.value, appordrive())
    .then((deleteDirRes) => {
        console.log(deleteDirRes);
      },
      (err) => {
        console.log(err);
      });
}

//getdir
function getdir() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.getDir(auth, dirpath.value, appordrive())
    .then((getDirRes) => {
        console.log(getDirRes);
        //clears out html contents on each get
        foldercontents.innerHTML = "";
        
        var files = getDirRes.files;
        for (var i = 0; i < files.length; i++) {
          console.log(files[i].name);
          $("#foldercontents").append("<div class='icons'><i class='material-icons md-48'>description</i><p>" + files[i].name  + "</p></div>");
        //  foldercontents.innerHTML = "<div class='icons'><i class='material-icons md-48'>description</i><p>" + files[i].name + "</p></div>";
        }
        var subdirs = getDirRes.subDirectories;
        for (var y = 0; y < subdirs.length; y++) {
          console.log(subdirs[y].name);
          $("#foldercontents").append("<div class='icons'><i class='material-icons md-48'>folder</i><p>" + subdirs[y].name + "</p></div>");
        //  foldercontents.innerHTML = "<div class='icons'><i class='material-icons md-48'>folder</i><p>" + subdirs[y].name + "</p></div>";
        }
      },
      (err) => {
        console.log(err);
      });
}

//renamedir
function renamedir() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.renameDir(auth, dirpath.value, newname.value, window.btoa(newname.value), appordrive())
    .then((renameDirRes) => {
        console.log(renameDirRes);
      },
      (err) => {
        console.log(err);
      });
}

/*
//movedir
function movedir(moveDir) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.moveDir(auth, srcRootPath, srcPath, destRootPath, destPath, action = 'move')
    .then((moveDirRes) => {
        console.log(moveDirRes);
      },
      (err) => {
        console.log(err);
      });
}
*/
