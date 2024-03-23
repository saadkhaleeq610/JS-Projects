const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

function addColor(){
    document.body.style.backgroundColor = getRandomColor();
};

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;

start.addEventListener('click', function(){
    intervalId = setInterval(addColor, 1000);
});

stop.addEventListener('click', function(){
    clearInterval(intervalId)
});