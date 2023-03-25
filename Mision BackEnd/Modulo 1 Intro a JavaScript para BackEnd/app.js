function moverPositionRandom(params)
{
    params.style.position = 'absolute';
    params.style.top = Math.random() * (window.innerHeight - params.offsetHeight) + 'px';
    params.style.left = Math.random() * (window.innerWidth - params.offsetWidth) + 'px';
}

let btnSi = document.getElementById('btn_si')
let btnNo = document.getElementById('btn_no')
let divModoSexo = document.getElementsByClassName('modo_sexo')[0];

btnNo.addEventListener('mouseenter', function(e)
{moverPositionRandom(e.target)});
btnSi.addEventListener('click', function(e)
{
    alert('Sabia que dirias que sí');
    divModoSexo.style.display ='block';
    const cancion = new Audio('\\MURMULLO.mp3');
    cancion.play();
})