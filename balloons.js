$(document).ready(function() {
    // Requirement: Randomize attention seeker on Happy Birthday greeting
    let attentionSeekers = [
        'bounce',
        'flash',
        'pulse',
        'rubberBand',
        'shakeX',
        'shakeY',
        'headShake',
        'swing',
        'tada',
        'wobble',
        'jello',
        'heartBeat'
    ]

    $('h1.greeting').addClass('animated animate__animated animate__' + attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)])

    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });

    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    $('#checkbox-card').on('change', function(e) {
        if (e.target.classList.contains('form-check-input')) {
            document.getElementById(e.target.id + 'Img').style.visibility = e.target.checked ? "visible" : "hidden";
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            e.target.checked ? elem.classList.add("animate__animated", "animate__bounceInDown") : elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });

    // Requirement: Select/deselect all balloon colors with a button
    $('#balloon-btn').click(function(e) {
        e.preventDefault();
        let checkboxes = $('.color-selection .form-check input').toArray();

        let checkedBoxes = checkboxes.filter(checkbox => $(checkbox).prop('checked') == true);

        // check state swap: if some or none are checked select all, if all are selected deselect all
        let checkState = checkedBoxes.length >= 0 && checkedBoxes.length < checkboxes.length;
        $('.color-selection .form-check input').toArray().forEach(checkbox => $(checkbox).prop('checked') != checkState ? $(checkbox).trigger('click') : null);
    });

    // Requirement: Change birthday greeting color on hover and revert on leave
    $('.color-selection .form-check label').on('mouseover mouseleave', function(e) {
        e.type === 'mouseover' ? $('h1.greeting').addClass(e.target.getAttribute('for')) : $('h1.greeting').removeClass(e.target.getAttribute('for'));
    });

    // Requirement: Display a toast on clicking 'Submit' if there are selected balloons
    $('#submit').click(function(e) {
        if ($('.color-selection .form-check input').toArray().filter(checkbox => $(checkbox).prop('checked') == true).length == 0) {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });
});