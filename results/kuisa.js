// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA0bSfBNKA4Y3oDbiorSA8dYrI6X7thQpI",
    authDomain: "statistika-smp.firebaseapp.com",
    databaseURL: "https://statistika-smp.firebaseio.com",
    projectId: "statistika-smp",
    storageBucket: "statistika-smp.appspot.com",
    messagingSenderId: "221055005685",
    appId: "1:221055005685:web:6704d25858af96560426bc",
    measurementId: "G-SD240GBRWE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var data = database.ref('kuis-a');
var index = 0;
data.on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    index+=1;
    var hasil = childSnapshot.val();
    var tblData = document.getElementById("data");
    tblData.innerHTML += `
      <tr>
        <td>${index}.</td>
        <td>${hasil.nama}</td>
        <td>${hasil.kelas}</td>
        <td>${hasil.nilai}</td>      
        <td>${hasil.tanggal} ${hasil.waktu}</td>      
      </tr>
    `
  })
});

