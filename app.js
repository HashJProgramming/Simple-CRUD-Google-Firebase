  //Firebase configuration
var firebaseConfig = {
apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();
// const database = firestore.doc("database1/data");

const head = document.getElementById("Header");
const user = document.getElementById("username");
const passuser = document.getElementById("password");
const button = document.getElementById("saveButton");
const lbutton = document.getElementById("login");
const delbutton = document.getElementById("del");
const upbutton = document.getElementById("update");

//CREATE BUTTON
button.addEventListener("click", function(){
    const database = firestore.doc("database1/" + user.value);
    const inputValue = user.value;
    if(inputValue.length !== 0){
        console.log("Saved " + inputValue);
        database.set({
            User: inputValue,
            Pass: passuser.value
        });
    }else{
        console.log("Make sure its not empty.");
    }
})

// READ BUTTON
lbutton.addEventListener("click", function(){
    const data = firestore.doc("database1/" + user.value);
    data.get().then( function(doc){
        if (doc && doc.exists){
            if (doc.data().User == user.value && doc.data().Pass == passuser.value){
                console.log("Logged")
                head.innerText = user.value + " " + passuser.value + " Correct!";
            }else{
                console.log("wrong username or password")
            }
        }
    })
})

// UPDATE BUTTON
upbutton.addEventListener("click", function(){
    const database = firestore.doc("database1/" + user.value);
    const inputValue = user.value;
    if(inputValue.length !== 0){
        console.log("Update " + inputValue);
        database.update({
            Pass: passuser.value
        });
    }else{
        console.log("Make sure its not empty.");
    }
})

// DELETE BUTTON
delbutton.addEventListener("click", function(){
    firestore.doc("database1/" + user.value).delete();
})