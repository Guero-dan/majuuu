var firebaseConfig = {
      apiKey: "AIzaSyDcR2sLSKFM8VjqUzi2JTFsXBAwPur3HeE",
      authDomain: "majuuu-da6a5.firebaseapp.com",
      databaseURL: "https://majuuu-da6a5-default-rtdb.firebaseio.com",
      projectId: "majuuu-da6a5",
      storageBucket: "majuuu-da6a5.appspot.com",
      messagingSenderId: "641200726541",
      appId: "1:641200726541:web:4431fd98207b52f324eb44"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    USER=localStorage.getItem("username");
    document.getElementById("ponntexto").innerHTML="Hola "+USER+" bienvenido a majuuu"
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                  //Finaliza el código
                  renglon='<div class="room_name" id="'+Room_names+'" onclick="sal(this.id)">'+Room_names+'</div><hr>';
                  document.getElementById("output").innerHTML+=renglon;
            });
      });
}
getData();
function create(){
      roooomm=document.getElementById("createsala").value;
      firebase.database().ref().child(roooomm).update({child:"apuyuvuoca"});
      document.getElementById("createsala").value="";
}
function elmoadooo(){
      console.log("hellllllllllllllllllllllllllllllllllllllllllllll1llllllllllllllllooooo");
      localStorage.removeItem("username");
      localStorage.removeItem("ojorj");
      localStorage.removeItem("luzaj");
      window.location="index.html";
}
function sal(name){
      localStorage.setItem("salele", name);
      window.location="kwitter_page.html";
}
