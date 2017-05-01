//Intial function
"Use strict";

var auth = localStorage.getItem("auth");
var dirpath = document.getElementById("dirpath").value;
var newname = document.getElementById("newname").value;

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
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.createDir(auth, dirpath, false)
    .then((createDirRes) => {
        console.log(createDirRes);
      },
      (err) => {
        console.error(err);
      });
}
//deletedir
function deletedir() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.deleteDir(auth, dirpath, isPathShared = false)
    .then((deleteDirRes) => {
        console.log(deleteDirRes);
      },
      (err) => {
        console.error(err);
      });
}

//getdir
function getdir() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.getDir(auth, dirpath, isPathShared = false)
    .then((getDirRes) => {
        console.log(getDirRes);
      },
      (err) => {
        console.error(err);
      });
}
//getfilemetadata
function movedir(moveDir) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.moveDir(auth, srcRootPath, srcPath, destRootPath, destPath, action = 'move')
    .then((moveDirRes) => {
        console.log(moveDirRes);
      },
      (err) => {
        console.error(err);
      });
}
//getfilemetadata
function renamedir() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.renameDir(auth, dirpath, newname, metadata, isPathShared = false)
    .then((renameDirRes) => {
        console.log(renameDirRes);
      },
      (err) => {
        console.error(err);
      });
}
