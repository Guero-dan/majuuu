//TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyDcR2sLSKFM8VjqUzi2JTFsXBAwPur3HeE",
      authDomain: "majuuu-da6a5.firebaseapp.com",
      databaseURL: "https://majuuu-da6a5-default-rtdb.firebaseio.com",
      projectId: "majuuu-da6a5",
      storageBucket: "majuuu-da6a5.appspot.com",
      messagingSenderId: "641200726541",
      appId: "1:641200726541:web:4431fd98207b52f324eb44"
    };
    username=localStorage.getItem("username");
    roooooooooooooooooooomnombree=localStorage.getItem("salele");
    document.title="sala No "+roooooooooooooooooooomnombree;
    function SUPERMERIORPGLEYENDOFTHESEVENSTARS(){
      mensaje=document.getElementById("msg").value;
      firebase.database().ref(roooooooooooooooooooomnombree).push({
            asdfghjkllkjhgfdsa:mensaje,
            usuario:username,
            fecha:new Date().toUTCString(),
            like:0
      })
      document.getElementById("msg").value=""
}
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/" + roooooooooooooooooooomnombree).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val();
                  if (childKey != "child") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        USER=childData["usuario"];
                        message=childData["asdfghjkllkjhgfdsa"];
                        likk=childData["like"];
                        feefa=childData["fecha"];
                        rnglon='<sub>'+feefa+'</sub><h4>'+USER+'<img src="tick.png" class="user_tick"></h4><h4 class="message_h4">'+message+'</h4><button class="btn-danger" id="'+firebase_message_id+'" value="'+likk+'" onclick="ekil(this.id)">'+likk+'💓me guta</button>';
                        document.getElementById("output").innerHTML+=rnglon;
                  };
            });
      });
}
getData();
function elmojado(){
      localStorage.clear()
      window.location="index.html"
};
function ekil(id){
      likk=document.getElementById(id).value;
      likk++;
      firebase.database().ref(roooooooooooooooooooomnombree).child(id).update({like:likk});
};