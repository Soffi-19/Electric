const slider = document.getElementById("slider");
const led = document.getElementById("led-luz");
const valor = document.getElementById("valor");

slider.addEventListener("input", () => {

    let intensidad = slider.value;

    valor.textContent = intensidad;

    led.style.opacity = intensidad / 100;

    led.style.boxShadow =
    `0 0 ${intensidad / 2}px yellow,
     0 0 ${intensidad}px orange`;

});