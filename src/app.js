/*
* File: app.js
* Author: Németh Zsolt
* Copyright: 2024, NÉmeth Zsolt
* Group: Szoft I-2-N
* Date: 2024-03-26
* Github: https://github.com/NemethZsolt19/
* Licenc: GNU GPL
*/

const radiusInput = document.querySelector('#radius')
const heightInput = document.querySelector('#height')
const volumeInput = document.querySelector('#volume')
const calcButton = document.querySelector('#calcButton')

calcButton.addEventListener('click', () => {
    startCalc();
});

function startCalc(){
    const radius=Number(radiusInput.value)
    const height=Number(heightInput.value)
    const volume = calcVolume(radius, height)
    volumeInput.value = volume
}

function calcVolume(radius, height){
    return 1.0/3.0 * Math.pow(radius,2) * Math.PI * height
}