
let buttons = Array.from(document.getElementsByClassName('button'));
let display = document.getElementById('display');



buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            case '+/-':
                display.innerText = display.innerText * -1;
                break;
            case '%':
                display.innerText = display.innerText / 100;
                break;

            default:
                display.innerText += e.target.innerText;
        }

    });
    

});




