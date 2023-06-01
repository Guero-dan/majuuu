function entrace(){
    username=document.getElementById("nameuser").value;
    localStorage.setItem("username", username);
    window.location="kwitter_room.html";
}