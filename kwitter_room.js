// Import the functions you need from the SDKs you need
const firebaseConfig = {
      apiKey: "AIzaSyAlgEGVoRW1c1pxQFacliFJvks_OrTuUco",
      authDomain: "kwitterruchi2.firebaseapp.com",
      databaseURL: "https://kwitterruchi2-default-rtdb.firebaseio.com",
      projectId: "kwitterruchi2",
      storageBucket: "kwitterruchi2.appspot.com",
      messagingSenderId: "709817439973",
      appId: "1:709817439973:web:c9da6e88508072ac9ca60c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addUser()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}