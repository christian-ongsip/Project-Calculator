
let buttons = Array.from(document.getElementsByClassName('button'));
let buttons1 = Array.from(document.getElementsByClassName('button1'));
let buttons2 = Array.from(document.getElementsByClassName('button2'));

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

            default:
                display.innerText += e.target.innerText;
        }

    });

});

buttons1.map( button1 => {
    button1.addEventListener("click", (e) => {
        switch(e.target.innerText){
            default:
                display.innerText += e.target.innerText;
        }
        

    });

});

buttons2.map( button2 => {
    button2.addEventListener("click", (e) => {
        switch(e.target.innerText){
            default:
                display.innerText = "";
        }
        

    });

});
