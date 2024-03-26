//Németh Zsolt, I-2-N, 2024-03-26

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