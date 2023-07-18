// Add event
async function addEvent(ev) {
    // Validacion
    if (isNaN(Number($inputAddData.value)) || $inputAddData.value === '') {
        $warning.innerHTML = '<i class="fa-solid fa-circle-info"></i> Data should be a number';
        infoAnimation($warning.firstChild);
        return;
    }

    // Agregar nodo
    $warning.innerHTML = "";
    await addNode(list, $inputAddData.value);
}
$bAdd.addEventListener('click', addEvent);
$inputAddData.addEventListener('keydown', ev => {
    if (ev.key === 'Enter') addEvent(ev);
});

// Insert event
function insertEvent(ev) {
    // Validacion
    if (isNaN(Number($inputInsertIndex.value)) || $inputInsertIndex.value === '') {
        $warning.innerHTML = "<i class='fa-solid fa-circle-info'></i> Index should be a number";
        infoAnimation($warning.firstChild);
        return;
    }
    if (parseInt($inputInsertIndex.value) < 0 || parseInt($inputInsertIndex.value) > listLength(list)) {
        $warning.innerHTML = "<i class='fa-solid fa-circle-info'></i> The index is not valid";
        infoAnimation($warning.firstChild);
        return;
    }
    if (isNaN(Number($inputInsertData.value)) || $inputInsertData.value === '') {
        $warning.innerHTML = "<i class='fa-solid fa-circle-info'></i> Data should be a number";
        infoAnimation($warning.firstChild);
        return;
    }

    // Insertar nodo
    $warning.innerHTML = "";
    insertNode(list, parseInt($inputInsertIndex.value), $inputInsertData.value);
}

$bInsert.addEventListener('click', insertEvent);
$inputInsertData.addEventListener('keydown', ev => {
    if (ev.key === 'Enter') insertEvent(ev);
});
$inputInsertIndex.addEventListener('keydown', ev => {
    if (ev.key === 'Enter') insertEvent(ev);
});

// Set event
function setEvent(ev) {
    // Validacion
    if (isNaN(Number($inputSetIndex.value)) || $inputSetIndex.value === '') {
        $warning.innerHTML = "<i class='fa-solid fa-circle-info'></i> Index should be a number";
        infoAnimation($warning.firstChild);
        return;
    }
    if (parseInt($inputSetIndex.value) < 0 || parseInt($inputSetIndex.value) >= listLength(list)) {
        $warning.innerHTML = "<i class='fa-solid fa-circle-info'></i> The index is not valid";
        infoAnimation($warning.firstChild);
        return;
    }
    if (isNaN(Number($inputSetData.value)) || $inputSetData.value === '') {
        $warning.innerHTML = "<i class='fa-solid fa-circle-info'></i> Data should be a number";
        infoAnimation($warning.firstChild);
        return;
    }

    // Insertar nodo
    $warning.innerHTML = "";
    setNode(list, parseInt($inputSetIndex.value), $inputSetData.value);
}

$bSet.addEventListener('click', setEvent);
$inputSetData.addEventListener('keydown', ev => {
    if (ev.key === 'Enter') setEvent(ev);
});
$inputSetIndex.addEventListener('keydown', ev => {
    if (ev.key === 'Enter') setEvent(ev);
});

