//Intial function
"Use strict";

var auth = localStorage.getItem("auth");
var dirpath = document.getElementById("dirpath");
var newname = document.getElementById("newname");

window.document.getElementById("createdir").addEventListener("click", function() {
  createdir();
});
window.document.getElementById("getdir").addEventListener("click", function() {
  getdir();
});
window.document.getElementById("renamedir").addEventListener("click", function() {
  renamedir();
});
window.document.getElementById("movedir").addEventListener("click", function() {
  movedir();
});
window.document.getElementById("deletedir").addEventListener("click", function() {
  deletedir();
});


//createdir
function createdir() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.createDir(auth, dirpath.value, false)
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
  window.safeNFS.deleteDir(auth, dirpath.value, isPathShared = false)
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
  window.safeNFS.getDir(auth, dirpath.value, isPathShared = false)
    .then((getDirRes) => {
        console.log(getDirRes);
      },
      (err) => {
        console.log(err);
      });
}
//getfilemetadata
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
//getfilemetadata
function renamedir() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeNFS.renameDir(auth, dirpath.value, newname.value, metadata, isPathShared = false)
    .then((renameDirRes) => {
        console.log(renameDirRes);
      },
      (err) => {
        console.log(err);
      });
}
