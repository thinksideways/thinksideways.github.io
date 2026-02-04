$(document).ready(function() {
    $(document).on('keydown', function(e) {
        e.preventDefault();
        if (e.key === "Escape") {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
        }
    });

    $('.discount-toast').click(function(e) {
        e.preventDefault();

        $('.toast-header strong').html(e.target.dataset['product']);
        $('.toast-header small').html(e.target.dataset['discounttitle']);
        $('.toast-body').html("Discount Code: " + e.target.dataset['discountcode']);

        bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    });
})

