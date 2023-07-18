// DARK MODE
const $darkButton = document.querySelector('.dark-light-mode');
let dark = 'true';

if (localStorage.getItem('dark') !== null) dark = localStorage.getItem('dark');

// Actualizamos el modo
if (dark === 'false') {
    document.body.style.setProperty('--background', '#fff');
    document.body.style.setProperty('--color', '#000');
    document.body.style.setProperty('--input-background-color', '#262626');
    document.body.style.setProperty('--input-color', '#fff');
} else {
    document.body.style.setProperty('--background', 'linear-gradient(180deg, rgb(38, 38, 38) 0%, rgb(53, 53, 53) 100%)');
    document.body.style.setProperty('--color', '#b1bd8d');
    document.body.style.setProperty('--input-background-color', '#fff');
    document.body.style.setProperty('--input-color', '#000');
}

/*
    MODO OSCURO
    --background: linear-gradient(180deg, rgb(38, 38, 38) 0%, rgb(53, 53, 53) 100%);
    --color: #b1bd8d;
    --input-background-color: #fff;
    --input-color: #000;
    
    MODO CLARO
    --background: #fff;
    --color: #000000;
    --input-background-color: #262626;
    --input-color: #fff;
*/

// DARK MODE
$darkButton.addEventListener('click', ev => {
    if (dark === 'true') {
        dark = 'false';
        localStorage.setItem('dark', 'false');
        document.body.style.setProperty('--background', '#b1bd8d');
        document.body.style.setProperty('--color', '#333');
        document.body.style.setProperty('--input-background-color', '#333');
        document.body.style.setProperty('--input-color', '#fff');
    } else {
        dark = 'true';
        localStorage.setItem('dark', 'true');
        document.body.style.setProperty('--background', 'linear-gradient(180deg, rgb(38, 38, 38) 0%, rgb(53, 53, 53) 100%)');
        document.body.style.setProperty('--color', '#b1bd8d');
        document.body.style.setProperty('--input-background-color', '#fff');
        document.body.style.setProperty('--input-color', '#000');
    }
});