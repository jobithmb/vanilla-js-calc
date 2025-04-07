// real time clock
const time = document.getElementById('time');

setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    time.innerText = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}, 1000);


// toggle theme
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
});

const calcValue = document.getElementById('calcValue');
const calcHistory = document.getElementById('calcHistory');

// Calculator Button handler
function buttonClickHandler(cmd) {

    // get current value of the history and value
    const currHistory = calcHistory.innerText;
    const currValue = calcValue.innerText;

    switch (cmd) {
        // special buttons
        case 'AC':
            calcValue.innerText = '';
            calcHistory.innerText = '';
            break;
        case 'para':
            break;
        case 'equal':
            break;
        case 'decimal':
            calcValue.innerText = currValue + '.';
            break;
        case 'clear':
            // remove last character
            calcValue.innerText = currValue.slice(0, -1);
            break;
        // operators
        case 'percent':
            calcValue.innerText = currValue + '%';
            break;
        case 'divide':
            calcValue.innerText = currValue + '/';
            break;
        case 'multiply':
            calcValue.innerText = currValue + 'x';
            break;
        case 'subtract':
            calcValue.innerText = currValue + '-';
            break;
        case 'add':
            calcValue.innerText = currValue + '+';
            break;
        // numbers    
        case 'num7':
            calcValue.innerText = currValue + '7';
            break;
        case 'num8':
            calcValue.innerText = currValue + '8';
            break;
        case 'num9':
            calcValue.innerText = currValue + '9';
            break;
        case 'num4':
            calcValue.innerText = currValue + '4';
            break;
        case 'num5':
            calcValue.innerText = currValue + '5';
            break;
        case 'num6':
            calcValue.innerText = currValue + '6';
            break;
        case 'num1':
            calcValue.innerText = currValue + '1';
            break;
        case 'num2':
            calcValue.innerText = currValue + '2';
            break;
        case 'num3':
            calcValue.innerText = currValue + '3';
            break;
        case 'num0':
            calcValue.innerText = currValue + '0';
            break;
    } 
}