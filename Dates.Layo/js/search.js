
//  closebtn = document.getElementById('closebtn');
//  abtn = document.getElementById('abtn');
//  searchbaroverlay = document.getElementById('myoverlay');
//  burgericon = document.getElementById('icon');
//  burgermenu = document.getElementById('mylinks');


// burgericon.addEventListener('click', () => {
//     burgermenu.classList.toggle("burger");
// });

// abtn.addEventListener('click', () => {
//     searchbaroverlay.classList.add("active");
// });

// closebtn.addEventListener ('click', () => {
//     searchbaroverlay.classList.remove("active");
// });

$(document).ready(function() {
    $('#abtn').click(function() {
       $('#myoverlay').toggleClass('active');
       alert('Button was clicked!');
    });
});


















