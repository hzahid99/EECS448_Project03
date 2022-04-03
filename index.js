//
let display = document.getElementById('calDisplay'); 

//Getting all the divs with the class button that are all the keys of the calc
let buttons = Array.from(document.getElementsByClassName('button'));

//Traversing through the array of buttons and adding event listener to each of them, keys waiting for clicks to happen
buttons.map(button => { 
    button.addEventListener('click', (event) => {                       //event object is the button that gets clicked

        if (event.target.innerText == 'C') {                            //If the key C is clicked 
            display.innerText = '';                                     //Reset the calculator and clear out the display by using an empty string
        }

        else if (event.target.innerText == '←') {                       //If backspace is clicked
            if (display.innerText) {                                    //Check if the display has text in it
                display.innerText = display.innerText.slice(0, -1);     //If it does, remove the last charachter of the string
            }
        }

        else if (event.target.innerText == '=') {                       //If = is clicked
            try {                                                       //Try to the evaluate the operation between the strings eg 1+1
                display.innerText = eval(display.innerText);
            } catch {                                                   //If it can't evaluate, display "Error"
                display.innerText = "Error"
            }
        }

        else {
            display.innerText += event.target.innerText;                //For all the digits and operators, display will display the strings eg 2*6
        }                                                               //This is evaluated by =

    });
});


