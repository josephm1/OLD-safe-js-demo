//Intial function
"Use strict";

var auth = localStorage.getItem("auth");

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
      window.safeNFS.createOrUpdateFile(auth, document.getElementById("filepath").value, document.getElementById("file").value, dataType = 'text/plain')
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
      window.safeNFS.deleteFile(auth, document.getElementById("filepath").value, isPathShared = false)
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
      window.safeNFS.getFile(auth, document.getElementById("filepath").value, responseParsing = 'text', isPathShared = false)
          .then((getFileRes) => {
                  console.log(getFileRes);
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
      window.safeNFS.getFileMetaData(auth, document.getElementById("filepath").value, isPathShared = false)
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
      window.safeNFS.renameFile(auth, document.getElementById("filepath").value, document.getElementById("newname").value, metadata, isPathShared = false)
          .then((renameFileRes) => {
                  console.log(renameFileRes);
              },
              (err) => {
                  console.error(err);
              });
  }
