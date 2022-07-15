// Variables
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');



// Calculator Display
let realTimeScreenValue = []

// To Clear

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// Get value of any button clicked and display to the screen

buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {

                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));

            }

        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})


// Displays entered value on screen.
function liveScreen(enteredValue) {
    if (!res.value) {
      res.value = "";
    }
    res.value += enteredValue;
  }
  
  //adding event handler on the document to handle keyboard inputs
  document.addEventListener("keydown", keyboardInputHandler);
  
  //function to handle keyboard inputs
  function keyboardInputHandler(e) {
    // to fix the default behavior of browser,
    // enter and backspace were causing undesired behavior when some key was already in focus.
    e.preventDefault();
    //grabbing the liveScreen
  
    //numbers
    if (e.key === "0") {
      res.value += "0";
    } else if (e.key === "1") {
      res.value += "1";
    } else if (e.key === "2") {
      res.value += "2";
    } else if (e.key === "3") {
      res.value += "3";
    } else if (e.key === "4") {
      res.value += "4";
    } else if (e.key === "5") {
      res.value += "5";
    } else if (e.key === "6") {
      res.value += "6";
    } else if (e.key === "7") {
      res.value += "7";
    } else if (e.key === "7") {
      res.value += "7";
    } else if (e.key === "8") {
      res.value += "8";
    } else if (e.key === "9") {
      res.value += "9";
    }
  
    //operators
    if (e.key === "+") {
      res.value += "+";
    } else if (e.key === "-") {
      res.value += "-";
    } else if (e.key === "*") {
      res.value += "*";
    } else if (e.key === "/") {
      res.value += "/";
    }
  
    //decimal key
    if (e.key === ".") {
      res.value += ".";
    }
  
    //press enter to see result
    if (e.key === "Enter") {
      calculate(result.value);
    }
  
    //backspace for removing the last input
    if (e.key === "Backspace") {
      const resultInput = res.value;
      //remove the last element in the string
      res.value = resultInput.substring(0, res.value.length - 1);
    }
  }  