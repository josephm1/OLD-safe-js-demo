//Intial function
"Use strict";

var auth = localStorage.getItem("auth");

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
      window.safeNFS.createDir(auth, document.getElementById("dirpath").value)
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
      window.safeNFS.deleteDir(auth, document.getElementById("dirpath").value, isPathShared = false)
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
      window.safeNFS.getDir(auth, document.getElementById("dirpath").value, isPathShared = false)
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
      window.safeNFS.renameDir(auth, document.getElementById("dirpath").value, document.getElementById("newname").value, metadata, isPathShared = false)
          .then((renameDirRes) => {
                  console.log(renameDirRes);
              },
              (err) => {
                  console.error(err);
              });
  }
