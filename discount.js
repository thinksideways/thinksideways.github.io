$(document).ready(function() {
    $('.discount-toast').click(function(e) {
        e.preventDefault();
        console.log("clicked");
        bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    });
})

