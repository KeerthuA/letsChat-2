function addUser()
{
    user_name = document.getElementById("user_name").value;
    email_id = document.getElementById("email_id").value;
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("email_id",email_id);
    window.location = "kwitter_room.html";
}