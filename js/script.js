const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() { /*pega as horas, minutos e segundos*/
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if  (hr < 10) hr = '0' + hr; /* se for menor que 10, adiciona um 0 na frente*/
    if  (min < 10) min = '0' + min;
    if  (sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

})  