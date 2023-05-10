const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');
const form = document.getElementById('form')

form.addEventListener('submit', btnOnclik);

function btnOnclik(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado :" + sumaInputs;
}


// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// })

// h1.innerHTML = 'Dimelo SOG <br> Feo';
// h1.innerText = 'Dimelo SOG <br> Feo';
// console.log(h1.getAttribute ('Dimelo SOG <br> Feo'));
// // h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.add('verde');

// input.value = "456"
// const img = document.createElement('img');

// img.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg')

// console.log(img)

// pid.innerHTML = "";
// pid.append(img);

