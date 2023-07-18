// Estructura de datos
let list = {
    head: null
}

// Objetos html
const $linkedList = document.querySelector('.linked-list');
const $bSet = document.querySelector('#bSet');
const $inputSetIndex = document.querySelector('#inputSetIndex');
const $inputSetData = document.querySelector('#inputSetData');
const $bInsert = document.querySelector('#bInsert');
const $inputInsertIndex = document.querySelector('#inputInsertIndex');
const $inputInsertData = document.querySelector('#inputInsertData');
const $bAdd = document.querySelector('#bAdd');
const $inputAddData = document.querySelector('#inputAddData');
const $bRemove = document.querySelector('#bRemove');
const $inputRemoveIndex = document.querySelector('#inputRemoveIndex');
const $warning = document.querySelector('#warning');

// Renderizar la lista
// list contien un nodo, no puede ser la variable global list
function renderList (list) {
    $linkedList.textContent = '';
    renderListRec(list, 0);
}

// Funcion recursiva
function renderListRec (list, i) {
    if (list != null) {
        // Agregamos el html
        let div = document.createElement('div');
        div.textContent = list.data;
        div.setAttribute('data-id', String(i));
        div.classList.add('node');

        let arrow = document.createElement('i');
        arrow.classList.add('fa-solid', 'fa-arrow-right-long', 'arrow');

        $linkedList.appendChild(div);
        $linkedList.appendChild(arrow);

        // Llamada recursiva
        renderListRec(list.next, i + 1);
    }
}

// List length 
function listLength (list) {
    let i = 0;
    if (list.head !== null) {
        i = 1;
        list = list.head;
        while (list.next != null) {
            list = list.next;
            i++;
        }
    }

    return i;
}

// ADD function
async function addNode (list, data) {
    let i = 0;

    // Agregamos el nuevo nodo a la lista
    let node = {
        data: data,
        next: null
    }
    if (list.head !== null) {
        list = list.head;
        while (list.next !== null) {
            list = list.next;
            i++;
        }
        
        list.next = node;
        i++;
    } else {
        list.head = node;
    }

    // Animamos hasta el ultimo elemento
    await normalAnimation(0, $linkedList.children.length - 1);

    // Agregamos el nuevo nodo
    let div = document.createElement('div');
    div.textContent = data;
    div.setAttribute('data-id', String(i));
    div.classList.add('node');

    $linkedList.appendChild(div);

    // Animamos el nuevo nodo
    await newNodeAnimation(div);

    // Agregamos la nueva flecha
    let arrow = document.createElement('i');
    arrow.classList.add('fa-solid', 'fa-arrow-right-long', 'arrow');

    $linkedList.appendChild(arrow);

    // Animamos flecha
    await newArrowAnimation(arrow);
}



// INSERT function
async function insertNode (list2, index, data) {
    let i = 0;
    let node = {
        data,
        next: null
    }
    if (index !== 0) {
        i++;
        list2 = list2.head;

        while (index !== i) {
            i++;
            list2 = list2.next;
        }

        node.next = list2.next;
        list2.next = node;
    } else {
        node.next = list2.head;
        list2.head = node;
    }

    // Animamos hasta el elemento a insertar
    await normalAnimation(0, index*2 - 1);

    // Renderizamos
    renderList(list.head);

    // Animamos el nuevo nodo
    newNodeAnimation(document.querySelector(`div[data-id="${index}"]`));
    newArrowAnimation($linkedList.children[index*2 + 1]);
}

// SET function
async function setNode (list2, index, data) {
    let i = 0;
    list2 = list2.head;

    while (index !== i) {
        i++;
        list2 = list2.next;
    }

    list2.data = data;

    // Animamos hasta el nodo a editar
    await normalAnimation(0, index*2 - 1);
    
    // Renderizamos
    renderList(list.head);
}