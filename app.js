const startingMinutes = 10;
let time = startingMinutes * 60;

const appEl = document.getElementById('app');

setInterval(updateApp, 1000);

function updateApp(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;


    appEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}
