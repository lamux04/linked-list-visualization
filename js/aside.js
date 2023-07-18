const $aside = document.querySelector('aside');
const $openAside = document.querySelector('.burguer-menu');
const $closeAside = document.querySelector('.close');
const $nodeSpeedInput = document.querySelector('#node-speed');
const $nodeSpeedButton = document.querySelector('#node-speed-button');
const $arrowSpeedInput = document.querySelector('#arrow-speed');
const $arrowSpeedButton = document.querySelector('#arrow-speed-button');
const $warningAside = document.querySelector('.warning-aside');
const $saved = document.querySelector('.saved');

// Evento para abrir el menu vertical
$openAside.addEventListener('click', ev => {
    let keyframe = [
        {transform: 'translateX(-300px)'},
        {transform: 'translateX(0px)'}
    ]

    let timing = {
        duration: 300,
        iterations: 1
    }
    $aside.classList.add('visible');
    $aside.animate(keyframe, timing);
});

// Evento para cerrar el menu vertical
$closeAside.addEventListener('click', ev => {
    let keyframe = [
        {transform: 'translateX(0px)'},
        {transform: 'translateX(-300px)'}
    ]

    let timing = {
        duration: 300,
        iterations: 1
    }
    $aside.classList.remove('visible')
    $aside.animate(keyframe, timing);
});

// Evento para enviar la informacion del node speed
$nodeSpeedButton.addEventListener('click', ev => {
    // Validamos
    if (!isNaN(Number($nodeSpeedInput.value)) && Number($nodeSpeedInput.value) > 0) {
        $warningAside.innerHTML = '';
        $saved.textContent = 'Saved';
        // Saving the new speed
        nodeAnimationDuration = Number($nodeSpeedInput.value);

        localStorage.setItem('node-animation', nodeAnimationDuration);
    } else {
        $saved.textContent = '';
        $warningAside.innerHTML = "<i class='fa-solid fa-circle-info'></i> Speed is not valid";
        infoAnimation($warningAside.firstChild);
    }
})

// Evento para enviar la informacion del arrow speed
$arrowSpeedButton.addEventListener('click', ev => {
    // Validamos
    if (!isNaN(Number($arrowSpeedInput.value)) && Number($arrowSpeedInput.value) > 0) {
        $warningAside.innerHTML = '';
        $saved.textContent = 'Saved';
        // Saving the new speed
        arrowAnimationDuration = Number($arrowSpeedInput.value);

        localStorage.setItem('arrow-animation', arrowAnimationDuration);
    } else {
        $saved.textContent = '';
        $warningAside.innerHTML = "<i class='fa-solid fa-circle-info'></i> Speed is not valid";
        infoAnimation($warningAside.firstChild);
    }
})