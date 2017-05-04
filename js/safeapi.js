//Intial function
"Use strict";

/*
 *                                   Auth
 */

//app payload
const app = {
  name: "Safe Web Demo",
  id: "Joe",
  version: "0.0.1",
  vendor: "Joe",
  permissions: [
    "LOW_LEVEL_API", "SAFE_DRIVE_ACCESS"
  ]
};

//Authorise
function authorise(authoriseSource) {
  console.log('Authorising application');
  //Authenticates with the payload app
  window.safeAuth.authorise(app)
    .then((response) => {
        auth = response;
        //Saves token to local storage
        if (typeof auth === 'string') {
          setAuthToken(auth.__parsedResponseBody__.token);
        }
        //The authentication is successful
        //Logs some data in the console
        console.log(auth);
        /*console.log("Hostname: " + hostName);
        console.log("Token: " + auth.token);
        console.log("Permissions: " + auth.permissions);
        console.log("Authorise requested from: " + authoriseSource);*/
      },
      //The Authentication fails
      (err) => {
        //Sends error to console
        console.error(err);
      });
}

//isTokenValid
function istokenvalid(isTokenValidSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeAuth.isTokenValid(auth.token)
    .then((isTokenValidRes) => {
        console.log(isTokenValidRes);
      },
      (err) => {
        console.error(err);
      });
}

/*
 *                                   NFS
 */

//createdir
function createdir(createDirSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.createDir(auth.token, dirPath, isPrivate, userMetadata, isPathShared = false)
    .then((createDirRes) => {
        console.log(createDirRes);
      },
      (err) => {
        console.error(err);
      });
}

//createfile
function createfile(createFileSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.createFile(auth.token, filePath, dataToWrite, dataType = 'text/plain', dataLength, metadata, isPathShared = false)
    .then((createFileRes) => {
        console.log(createFileRes);
      },
      (err) => {
        console.error(err);
      });
}

//createorupdatefile
function createorupdatefile(createOrUpdateFileSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.createOrUpdateFile(auth.token, filePath, dataToWrite, dataType = 'text/plain', dataLength, metadata, isPathShared = false)
    .then((createOrUpdateFileRes) => {
        console.log(createOrUpdateFileRes);
      },
      (err) => {
        console.error(err);
      });
}

//deletedir
function deletedir(deleteDirSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.deleteDir(auth.token, dirPath, isPathShared = false)
    .then((deleteDirRes) => {
        console.log(deleteDirRes);
      },
      (err) => {
        console.error(err);
      });
}


//deletefile
function deletefile(deleteFileSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.deleteFile(auth.token, filePath, isPathShared = false)
    .then((deleteFileRes) => {
        console.log(deleteFileRes);
      },
      (err) => {
        console.error(err);
      });
}

//getdir
function getdir(getDirSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.getDir(auth.token, dirPath, isPathShared = false)
    .then((getDirRes) => {
        console.log(getDirRes);
      },
      (err) => {
        console.error(err);
      });
}

//getfile
function getfile(getFileSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.getFile(auth.token, filePath, responseParsing = 'text', isPathShared = false
    .then((getFileRes) => {
        console.log(getFileRes);
      },
      (err) => {
        console.error(err);
      }));
}

//getfilemetadata
function getfilemetadata(getFileMetaDataSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.getFileMetaData(auth.token, filePath, isPathShared = false)
    .then((getFileMetaDataRes) => {
        console.log(getFileMetaDataRes);
      },
      (err) => {
        console.error(err);
      });
}

//getfilemetadata
function movefile(moveFileSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.moveFile(auth.token, srcRootPath, srcPath, destRootPath, destPath, action = 'move')
    .then((moveFileRes) => {
        console.log(moveFileRes);
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
  window.safeNFS.moveDir(auth.token, srcRootPath, srcPath, destRootPath, destPath, action = 'move')
    .then((moveDirRes) => {
        console.log(moveDirRes);
      },
      (err) => {
        console.error(err);
      });
}

//getfilemetadata
function rename(renameSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.rename(auth.token, path, newName, isFile, metadata, isPathShared = false)
    .then((renameRes) => {
        console.log(renameRes);
      },
      (err) => {
        console.error(err);
      });
}

//getfilemetadata
function renamedir(renameDirSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.renameDir(auth.token, dirPath, newName, metadata, isPathShared = false)
    .then((renameDirRes) => {
        console.log(renameDirRes);
      },
      (err) => {
        console.error(err);
      });
}

//getfilemetadata
function renamefile(renamefileSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeNFS.renameFile(auth.token, filePath, newName, metadata, isPathShared = false)
    .then((renameFileRes) => {
        console.log(renameFileRes);
      },
      (err) => {
        console.error(err);
      });
}

/*
 *                                   DNS
 */

//createlongname
function createlongname(createLongNameSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeDNS.createLongName(auth.token, longName)
    .then((createLongNameRes) => {
        console.log(createLongNameRes);
      },
      (err) => {
        console.error(err);
      });
}

//addService
function addService(addServiceSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeDNS.addService(auth.token, longName, serviceName, serviceHomeDirPath, isPathShared)
    .then((addServiceRes) => {
        console.log(addServiceRes);
      },
      (err) => {
        console.error(err);
      });
}

//listLongNames
function listlongnames(listLongNamesSource) {
  if (typeof auth === 'undefined') {
    authorise();
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeDNS.listLongNames(auth.token)
    .then((listLongNamesRes) => {
        console.log(listLongNamesRes);
      },
      (err) => {
        console.error(err);
      });
}

// listServices
function listservices(listServicesSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeDNS.listServices(auth.token, longName)
    .then((listServicesRes) => {
        console.log(listServicesRes);
      },
      (err) => {
        console.error(err);
      });
}

/*
 *                                   Cipher Options
 */

//gethandle
function gethandle(getHandleSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeCipherOpts.getHandle(auth.token, encType, encryptKeyHandle)
    .then((getHandleRes) => {
        console.log(getHandleRes);
      },
      (err) => {
        console.error(err);
      });
}

//drophandle
function drophandle(dropHandleSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeCipherOpts.dropHandle(auth.token, handleId)
    .then((dropHandleRes) => {
        console.log(dropHandleRes);
      },
      (err) => {
        console.error(err);
      });
}

/*
 //getencryptiontypes
 function getencryptiontypes(getEncryptionTypesSource) {
     if (typeof auth === 'undefined') {
         alert("Please authorise first.");
         console.error("Error: You are not authorised");
         return;
     }
     window.safeCipherOpts.getEncryptionTypes(auth.token, longName)
         .then((getEncryptionTypesRes) => {
                 console.log(getEncryptionTypesRes);
             },
             (err) => {
                 console.error(err);
             });
 }*/

/*
 *                                   Sign Key
 */

//serialise
function serialise(serialiseSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeSignKey.serialise(auth.token, handleId)
    .then((serialiseRes) => {
        console.log(serialiseRes);
      },
      (err) => {
        console.error(err);
      });
}

//deserialise
function deserialise(deserialiseSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeSignKey.deserialise(auth.token, data)
    .then((deserialiseRes) => {
        console.log(deserialiseRes);
      },
      (err) => {
        console.error(err);
      });
}

//dropHandle
function signKeyDropHandle(deserialiseSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeSignKey.dropHandle(auth.token, handleId)
    .then((dropHandleRes) => {
        console.log(dropHandleRes);
      },
      (err) => {
        console.error(err);
      });
}

/*
 *                                   Data Id
 */

//getAppendableDataHandle
function getAppendableDataHandle(getAppendableDataHandleSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeDataId.getAppendableDataHandle(auth.token, name, isPrivate = false)
    .then((getAppendableDataHandleeRes) => {
        console.log(getAppendableDataHandleRes);
      },
      (err) => {
        console.error(err);
      });
}

//getStructuredDataHandle
function getStructuredDataHandle(getStructuredDataHandleSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeDataId.getStructuredDataHandle(auth.token, name, typeTag = SD_DEFAULT_TYPE_TAG)
    .then((getStructuredDataHandleeRes) => {
        console.log(getStructuredDataHandleRes);
      },
      (err) => {
        console.error(err);
      });
}

//serialise
function DataIdSerialise(serialiseSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeDataId.serialise(auth.token, handleId)
    .then((serialiseRes) => {
        console.log(serialiseRes);
      },
      (err) => {
        console.error(err);
      });
}

//deserialise
function DataIdDeserialise(dataIdDeserialiseSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeDataId.deserialise(auth.token, data)
    .then((deserialiseRes) => {
        console.log(deserialiseRes);
      },
      (err) => {
        console.error(err);
      });
}

//dropHandle
function DataIdDropHandle(dataIdDropHandleSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeDataId.dropHandle(auth.token, handleId)
    .then((dropHandleRes) => {
        console.log(dropHandleRes);
      },
      (err) => {
        console.error(err);
      });
}

/*
 *                                   Immutable Data
 */

//getReaderHandle
function getReaderHandle(getReaderHandleSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeImmutableData.getReaderHandle(auth.token, handleId)
    .then((getReaderHandleRes) => {
        console.log(getReaderHandleRes);
      },
      (err) => {
        console.error(err);
      });
}

//getWriterHandle
function getWriterHandle(getWriterHandleSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeImmutableData.getWriterHandle(auth.token)
    .then((getWriterHandleRes) => {
        console.log(getWriterHandleRes);
      },
      (err) => {
        console.error(err);
      });
}

//read
function read(readSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeImmutableData.read(auth.token, handleId)
    .then((readRes) => {
        console.log(readRes);
      },
      (err) => {
        console.error(err);
      });
}

//write
function write(writeSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeImmutableData.write(auth.token, handleId, dataBuffer)
    .then((writeRes) => {
        console.log(writeRes);
      },
      (err) => {
        console.error(err);
      });
}

//closeWriter
function closeWriter(closeWriterSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeImmutableData.closeWriter(auth.token, handleId, cipherOptsHandle)
    .then((closeWriterRes) => {
        console.log(closeWriterRes);
      },
      (err) => {
        console.error(err);
      });
}

//dropReader
function dropReader(dropReaderSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.error("Error: You are not authorised");
    return;
  }
  window.safeImmutableData.dropReader(auth.token, handleId)
    .then((dropReaderRes) => {
        console.log(dropReaderRes);
      },
      (err) => {
        console.error(err);
      });
}

//dropWriter
function dropWriter(dropWriterSource) {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    closeWriter
    console.error("Error: You are not authorised");
    return;
  }
  window.safeImmutableData.dropWriter(auth.token, handleId)
    .then((dropWriterRes) => {
        console.log(dropWriterRes);
      },
      (err) => {
        console.error(err);
      });
}
