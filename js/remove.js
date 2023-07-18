let visibleChoose = false;
let mode = 'none';

const $gearChoose = document.querySelector('.change');
const $choose = document.querySelector('.choose');
const $inputRemoveData = document.querySelector('#inputRemoveData');

// REMOVE function
async function removeNodeIndex (list2, index) {
    let i = 0, previous;
    if (list2.head !== null) {
        if (index === 0) list2.head = list2.head.next;
        else {
            list2 = list2.head;
            while (i != index && list2.next !== null) {
                previous = list2;
                list2 = list2.next;
                i++;
            }
            previous.next = list2.next;
        }
    }

    // Animamos hasta el elemento a eliminar
    await normalAnimation(0, index*2 - 1);

    // Animamos el nodo a eliminar
    await removeNodeAndArrowAnimation($linkedList.children[index*2]);
    
    renderList(list.head);
}

function removeNode(list2, index) {
    let i = 0, previous;
    if (list2.head !== null) {
        if (index === 0) list2.head = list2.head.next;
        else {
            list2 = list2.head;
            while (i != index && list2.next !== null) {
                previous = list2;
                list2 = list2.next;
                i++;
            }
            previous.next = list2.next;
        }
    }
}

// Animation of appear and disappear choose display
async function appearChooseAnimation () {
    return new Promise((resolve, reject) => {
        let keyframe = [
            {transform: 'translateY(0px)'},
            {transform: 'translateY(40px)'}
        ];
        let timing = {
            duration: 300,
            iterations: 1
        };
        $choose.animate(keyframe, timing);
        setTimeout(resolve, timing.duration);
    })
}

async function disappearChooseAnimation () {
    return new Promise((resolve, reject) => {
        let keyframe = [
            {transform: 'translateY(40px)'},
            {transform: 'translateY(0px)'}
        ];
        let timing = {
            duration: 300,
            iterations: 1
        };
        $choose.animate(keyframe, timing);
        setTimeout(resolve, timing.duration);
    })
}

$gearChoose.addEventListener('click', async function (ev) {
    if (visibleChoose) {
        visibleChoose = false;
        await disappearChooseAnimation();
        $choose.style.display = 'none';
    } else {
        visibleChoose = true;
        $choose.style.display = 'initial';
        await appearChooseAnimation();
    }
});

// Put index mode
$choose.children[0].addEventListener('click', async function (ev) {
    visibleChoose = false;
    await disappearChooseAnimation();
    $choose.style.display = 'none';
    $inputRemoveIndex.style.display = 'initial';
    $inputRemoveData.style.display = 'none';
    mode = 'index';
});

// Put data mode
$choose.children[1].addEventListener('click', async function (ev) {
    visibleChoose = false;
    await disappearChooseAnimation();
    $choose.style.display = 'none';
    $inputRemoveData.style.display = 'initial';
    $inputRemoveIndex.style.display = 'none';
    mode = 'data';
});

// Remove by data
async function removeNodeData (list2, data) {
    let i = 0;
    let indices = [];
    let list3 = list2;
    if (list2.head !== null) {

        // Localizamos los indices
        list2 = list2.head;

        while (list2 !== null) {
            if (list2.data === data) {
                indices.push(i);
            }
            list2 = list2.next;
            i++;
        }

        // Eliminamos los elementos empezando por el ultimo
        indices.reverse().forEach((j) => {
            removeNode(list3, j);
        });

        // Animacion y renderizado
        i = 0;
        let j = 0;
        while (i < $linkedList.children.length) {
            if ($linkedList.children[i].textContent === data) {
                // Animamos desde el ultimo elemento eliminado hasta el elemento a eliminar
                await normalAnimation(j, i-1);

                // Eliminamo el nodo con una animacion
                await removeNodeAndArrowAnimation($linkedList.children[i]);

                // Eliminamos el nodo en el html
                $linkedList.children[i+1].remove();
                $linkedList.children[i].remove();

                j = i;
            }
            else i += 2;
        }

    }
}

// Remove event
async function removeEvent(ev) {
    if (mode === 'index') {
        // Validacion
        if (isNaN(Number($inputRemoveIndex.value)) || $inputRemoveIndex.value === '') {
            $warning.innerHTML = "<i class='fa-solid fa-circle-info'></i> Index should be a number";
            infoAnimation($warning.firstChild);
            return;
        }
        if (parseInt($inputRemoveIndex.value) < 0 || parseInt($inputRemoveIndex.value) >= listLength(list)) {
            $warning.innerHTML = "<i class='fa-solid fa-circle-info'></i> The index is not valid";
            infoAnimation($warning.firstChild);
            return;
        }

        // Eliminar nodo
        $warning.innerHTML = "";
        await removeNodeIndex(list, parseInt($inputRemoveIndex.value));

    } else if (mode === 'data') {
        // Validacion
        if (isNaN(Number($inputRemoveData.value)) || $inputRemoveData.value === '') {
            $warning.innerHTML = "<i class='fa-solid fa-circle-info'></i> Data should be a number";
            infoAnimation($warning.firstChild);
            return;
        }

        // Eliminar nodos
        $warning.innerHTML = "";
        console.log(Number($inputRemoveData.value))
        await removeNodeData(list, $inputRemoveData.value);

        renderList(list.head);
    }
}

$bRemove.addEventListener('click', removeEvent);
$inputRemoveIndex.addEventListener('keydown', ev => {
    if (ev.key === 'Enter') removeEvent(ev);
});
$inputRemoveData.addEventListener('keydown', ev => {
    if (ev.key === 'Enter') removeEvent(ev);
});