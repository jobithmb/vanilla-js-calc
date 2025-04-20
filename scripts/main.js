const calcValue = document.getElementById('calcValue');
const calcHistory = document.getElementById('calcHistory');

// keyboard event handler
document.addEventListener('keydown', (event) => {
    const key = event.key;
    console.log('KeyDown - ', key);
    document.querySelector("[data-key='" + key + "']")?.classList.add('active');
});

// keyboard event handler
document.addEventListener('keyup', (event) => {
    const key = event.key;
    console.log('KeyUp - ', key);
    document.querySelector("[data-key='" + key + "']")?.classList.remove('active');
    inputHandler(key)
});


function inputHandler (input) {
    // get current value of the history and value
    const currHistory = calcHistory.innerText;
    const currValue = calcValue.innerText;

    switch (input) {
        // special buttons
        case 'Escape':
        case 'AC':
            calcValue.innerText = '';
            calcHistory.innerText = '';
            break;
        case 'para':
            // TODO: WIP
            break;
            case 'Enter':
            case '=':
            case 'equal':
            // evaluate the expression and print the answer
            const answer = eval(currValue);         // calculating
            calcValue.innerText = answer;           // displaying
            calcHistory.innerText = currValue;      // update history
            break;
        case '.':
        case 'decimal':
            // check for double decimal numbers
            // 9.50+2.50
            // this should be possible
            // split the expression into operands and operators

            const expression = currValue.split('.');
            console.log(expression);


            if (currValue.includes('.')) {
                calcValue.innerText = currValue;
            } else {
                calcValue.innerText = currValue + '.';
            }
            // calcValue.innerText = currValue + '.';
            break;
        case 'Backspace':
        case 'clear':
            // remove last character
            calcValue.innerText = currValue.slice(0, -1);
            break;

        // operators
        case '%':
        case 'percent':
            calcValue.innerText = currValue + '%';
            break;
        case '/':
        case 'divide':
            calcValue.innerText = currValue + '/';
            break;
        case '*':
        case 'x':
        case 'X':
        case 'multiply':
            calcValue.innerText = currValue + '*';
            break;
        case '-':
        case 'subtract':
            calcValue.innerText = currValue + '-';
            break;
        case '+':
        case 'add':
            calcValue.innerText = currValue + '+';
            break;

        // numbers    
        case '7':
            calcValue.innerText = currValue + '7';
            break;
        case '8':
            calcValue.innerText = currValue + '8';
            break;
        case '9':
            calcValue.innerText = currValue + '9';
            break;
        case '4':
            calcValue.innerText = currValue + '4';
            break;
        case '5':
            calcValue.innerText = currValue + '5';
            break;
        case '6':
            calcValue.innerText = currValue + '6';
            break;
        case '1':
            calcValue.innerText = currValue + '1';
            break;
        case '2':
            calcValue.innerText = currValue + '2';
            break;
        case '3':
            calcValue.innerText = currValue + '3';
            break;
        case '0':
            if (currValue !== '') {
                calcValue.innerText = currValue + '0';
            }
            break;  
    }
}