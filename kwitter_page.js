//YOUR FIREBASE LINKS

    var firebaseConfig = {
      apiKey: "AIzaSyDz63_jtWKQYiwfTpXyUpLYf0JDu4ePMUE",
      authDomain: "project1-30a45.firebaseapp.com",
      databaseURL: "https://project1-30a45-default-rtdb.firebaseio.com",
      projectId: "project1-30a45",
      storageBucket: "project1-30a45.appspot.com",
      messagingSenderId: "638048537108",
      appId: "1:638048537108:web:54a1e2854642d7719f7501"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name : user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

