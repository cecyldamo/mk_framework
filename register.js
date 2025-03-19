document.addEventListener('DOMContentLoaded', function () {
    const civitasButton = document.querySelector('.civitas-button');
    const umumButton = document.querySelector('.umum-button');
    const nimNipField = document.querySelector('#nim-nip');
    const emailField = document.querySelector('#email-unsrat');
    const formGroupNimNip = document.querySelector('.form-group-nim-nip');

    civitasButton.addEventListener('click', function () {
        formGroupNimNip.style.display = 'block';
        nimNipField.setAttribute('required', 'required');
        emailField.setAttribute('placeholder', 'email unsrat');
    });

    umumButton.addEventListener('click', function () {
        formGroupNimNip.style.display = 'none';
        nimNipField.removeAttribute('required');
        emailField.setAttribute('placeholder', 'email');
    });
});