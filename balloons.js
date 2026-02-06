$(document).ready(function() {
    console.log("balloons javascript loaded");
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
});