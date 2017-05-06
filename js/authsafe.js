//Intial function
"Use strict";

//Finds and adds EventListener on auth_button
window.document.getElementById("authorise").addEventListener("click", function() {
  authorise();
});
window.document.getElementById("istokenvalid").addEventListener("click", function() {
  istokenvalid();
});

const app = {
  name: "Safe Web Demo",
  id: "Joe",
  version: "1",
  vendor: "Joe",
  permissions: [
    "SAFE_DRIVE_ACCESS"
  ]
};

/*
 *                                   Auth
 */

//Authorise
function authorise() {
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
        console.log("Token:" + auth.token);
        console.log("Permissions: " + auth.permissions);
        localStorage.setItem("auth", auth.token);
      },
      //The Authentication fails
      (err) => {
        //Sends error to console
        console.log(err);
      });
}

//isTokenValid
function istokenvalid() {
  if (typeof auth === 'undefined') {
    alert("Please authorise first.");
    console.log("Error: You are not authorised");
    return;
  }
  window.safeAuth.isTokenValid(auth.token)
    .then((isTokenValidRes) => {
        console.log(isTokenValidRes);
      },
      (err) => {
        console.log(err);
      });
}
