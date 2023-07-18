let nodeAnimationDuration = 300;
let arrowAnimationDuration = 300;

if (localStorage.getItem('node-animation') !== null)
    nodeAnimationDuration = parseInt(localStorage.getItem('node-animation'));

if (localStorage.getItem('arrow-animation') !== null)
    arrowAnimationDuration = parseInt(localStorage.getItem('arrow-animation'));

// Animate node
// function nodeAnimation ($node) {
//     let keyframe = [
//         // 0%
//         {transform: "scale(1)"},

//         // 50%
//         {transform: "scale(1.3)"},

//         // 100%
//         {transform: "scale(1)"}
//     ];

//     let timing = {
//         duration: nodeAnimationDuration,
//         iterations: 1
//     }
//     setTimeout(() => {}, timing.duration);

//     $node.animate(keyframe, timing);
// }


// La funcion devuelve una promesa, la cual realizara la animacion y se resolvera cuando esta termine
// Esto permite usar el await al ejecutar la funcion y asi, parar el flujo de la ejecucion mientras la animacion esta realizandose
function nodeAnimation ($node) {
    return new Promise((resolve, reject) => {
        try {
            let keyframe = [
                // 0%
                {transform: "scale(1)"},
        
                // 50%
                {transform: "scale(1.3)"},
        
                // 100%
                {transform: "scale(1)"}
            ];
        
            let timing = {
                duration: nodeAnimationDuration,
                iterations: 1
            }
            
            $node.animate(keyframe, timing);
            
            setTimeout(resolve, timing.duration);
        } catch {
            reject();
        }
    })
}

// Animate arrow
function arrowAnimation ($arrow) {
    return new Promise((resolve, reject) => {
        try {
            let keyframe = [
                // 0%
                {transform: "rotate(0deg)"},
        
                // 25%
                {transform: "rotate(20deg)"},
        
                // 50%
                {transform: "rotate(0deg)"},
        
                // 75%
                {transform: "rotate(-20deg)"},
        
                // 100%
                {transform: "rotate(0deg)"}
            ];
        
            let timing = {
                duration: arrowAnimationDuration,
                iterations: 1
            }
            
            $arrow.animate(keyframe, timing);
            setTimeout(resolve, timing.duration);
        } catch {
            reject();
        }
    })
    
}

// Animate node when is added
function newNodeAnimation ($node) {
    return new Promise((resolve, reject) => {
        try {
            let keyframe = [
                // 0%
                {transform: "scale(0.2)"},
        
                // 100%
                {transform: "scale(1)"}
            ];
        
            let timing = {
                duration: nodeAnimationDuration,
                iterations: 1
            }
            
            $node.animate(keyframe, timing);
            
            setTimeout(resolve, timing.duration);
        } catch {
            reject();
        }
    })
}

// Animate arrow when is added
function newArrowAnimation ($arrow) {
    return new Promise((resolve, reject) => {
        try {
            let keyframe = [
                // 0%
                {transform: "translateX(-25px)"},
        
                // 100%
                {transform: "transalateX(0px)"}
            ];
        
            let timing = {
                duration: arrowAnimationDuration,
                iterations: 1
            }
            
            $arrow.animate(keyframe, timing);
            setTimeout(resolve, timing.duration);
        } catch {
            reject();
        }
    })
    
}

// Animacion de eliminar nodo
function removeNodeAndArrowAnimation ($node) {
    return new Promise ((resolve, reject) => {
        try {
            let i = 0;
            while ($linkedList.children[i] !== $node && i < $linkedList.children.length) i++;
            let keyframe = [
                // 0%
                {transform: "scale(1)"},
        
                // 100%
                {transform: "scale(0)"}
            ];
        
            let timing = {
                duration: nodeAnimationDuration,
                iterations: 1
            }
            
            $linkedList.children[i + 1].animate(keyframe, timing);
            $node.animate(keyframe, timing);

            setTimeout(resolve, timing.duration);
        } catch {
            reject();
        }
    });
}

// Animate node and arrow by node
async function nodeAndArrowAnimation ($node) {
    // let id = parseInt($node.getAttribute('data-id'));
    // nodeAnimation($node);

    // setTimeout(() => {
    //     arrowAnimation($node.parentElement.children[id*2 + 1]);
    // }, 1000);
    let id = parseInt($node.getAttribute('data-id'));

    await nodeAnimation($node);

    await arrowAnimation($node.parentElement.children[id*2 + 1]);
}

// ADD animation
// async permite ejecutar awaits dentro de la funcion
// inicio y fin son los indices de inicio y fin
async function normalAnimation (inicio, fin) {
    let i;

    // Animamos todos los nodos que tenemos
    for (i = inicio; i <= fin; i++) {
        if ($linkedList.children[i].hasAttribute('data-id')) 
            await nodeAnimation($linkedList.children[i]);
        else await arrowAnimation($linkedList.children[i]);
    }
}

// Info animation
function infoAnimation ($info) {
    let keyframe = [
        {transform: 'scale(1)'},
        {transform: 'scale(1.5)'},
        {transform: 'scale(1)'}
    ];

    let timing = {
        duration: 500,
        iterations: 1
    }
    
    $info.animate(keyframe, timing);
}