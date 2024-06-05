document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Loaded");
    const display = document.getElementById("display");
    console.log(display);  // Should log the input element
  
    let secondToggle = false;
  
    window.appendToDisplay = function(input) {
      console.log(`Appending: ${input}`);  // Log what is being appended
      if (input === Math.PI.toFixed(15) || input === Math.E.toFixed(15)) {
        clearDisplay();
      }
      if (display.value === "Error") {
        display.value = "";
      }
      display.value += input;
    }
  
    window.clearDisplay = function() {
      display.value = "";
    }
  
    window.calculate = function() {
      display.value = display.value.replaceAll("^", "**");
      display.value = display.value.replaceAll("mod", "%");
      display.value = display.value.replaceAll("exp", "10*");
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    }
  
    window.squareRoot = function() {
      try {
        display.value = Math.sqrt(parseFloat(display.value));
      } catch (error) {
        display.value = "Error";
      }
    }
  
    window.deleteLast = function() {
      display.value = display.value.slice(0, -1);
    }
  
    window.square = function() {
      try {
        display.value = Math.pow(parseFloat(display.value), 2);
      } catch (error) {
        display.value = "Error";
      }
    }
  
    window.divide = function() {
      try {
        display.value = 1 / parseFloat(display.value);
      } catch (error) {
        display.value = "Error";
      }
    }
  
    window.abs = function() {
      try {
        display.value = Math.abs(parseFloat(display.value));
      } catch (error) {
        display.value = "Error";
      }
    }
  
    window.tenPower = function() {
      try {
        display.value = Math.pow(10, parseFloat(display.value));
      } catch (error) {
        display.value = "Error";
      }
    }
  
    window.log = function() {
      try {
        display.value = Math.log10(parseFloat(display.value));
      } catch (error) {
        display.value = "Error";
      }
    }
  
    window.ln = function() {
      try {
        display.value = Math.log(parseFloat(display.value));
      } catch (error) {
        display.value = "Error";
      }
    }
  
    window.plusMinus = function() {
      try {
        display.value = parseFloat(display.value) * -1;
      } catch (error) {
        display.value = "Error";
      }
    }
  
    window.factorial = function() {
      try {
        let result = 1;
        let number = parseInt(display.value);
        if (number < 0) {
          display.value = "Error";
          return;
        }
        for (let i = 1; i <= number; i++) {
          result *= i;
        }
        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
    }
  
    window.toggleSecond = function() {
      secondToggle = !secondToggle;
      document.getElementById('second').classList.toggle('active', secondToggle);
  
      if (secondToggle) {
        document.getElementById('square').innerText = "x³";
        document.getElementById('square').onclick = function() {
          try {
            display.value = Math.pow(parseFloat(display.value), 3);
          } catch (error) {
            display.value = "Error";
          }
        };
  
        document.getElementById('divide').innerText = "³√x";
        document.getElementById('divide').onclick = function() {
          try {
            display.value = Math.cbrt(parseFloat(display.value));
          } catch (error) {
            display.value = "Error";
          }
        };
  
        document.getElementById('factorial').innerText = "x!";
        document.getElementById('factorial').onclick = function() {
          try {
            let result = 1;
            let number = parseInt(display.value);
            if (number < 0) {
              display.value = "Error";
              return;
            }
            for (let i = 1; i <= number; i++) {
              result *= i;
            }
            display.value = result;
          } catch (error) {
            display.value = "Error";
          }
        };
  
        document.getElementById('squareRoot').innerText = "²√x";
        document.getElementById('squareRoot').onclick = function() {
          try {
            display.value = Math.sqrt(parseFloat(display.value));
          } catch (error) {
            display.value = "Error";
          }
        };
  
        document.getElementById('tenPower').innerText = "2^x";
        document.getElementById('tenPower').onclick = function() {
          try {
            display.value = Math.pow(2, parseFloat(display.value));
          } catch (error) {
            display.value = "Error";
          }
        };
  
        document.getElementById('log').innerText = "log₂";
        document.getElementById('log').onclick = function() {
          try {
            display.value = Math.log2(parseFloat(display.value));
          } catch (error) {
            display.value = "Error";
          }
        };
  
        document.getElementById('ln').innerText = "logₑ";
        document.getElementById('ln').onclick = function() {
          try {
            display.value = Math.log(parseFloat(display.value));
          } catch (error) {
            display.value = "Error";
          }
        };
      } else {
        document.getElementById('square').innerText = "x²";
        document.getElementById('square').onclick = function() {
          try {
            display.value = Math.pow(parseFloat(display.value), 2);
          } catch (error) {
            display.value = "Error";
          }
        };
  
        document.getElementById('divide').innerText = "1/x";
        document.getElementById('divide').onclick = function() {
          try {
            display.value = 1 / parseFloat(display.value);
          } catch (error) {
            display.value = "Error";
          }
        };
  
        document.getElementById('factorial').innerText = "n!";
        document.getElementById('factorial').onclick = window.factorial;
  
        document.getElementById('squareRoot').innerText = "²√x";
        document.getElementById('squareRoot').onclick = window.squareRoot;
  
        document.getElementById('tenPower').innerText = "10^x";
        document.getElementById('tenPower').onclick = window.tenPower;
  
        document.getElementById('log').innerText = "log";
        document.getElementById('log').onclick = window.log;
  
        document.getElementById('ln').innerText = "ln";
        document.getElementById('ln').onclick = window.ln;
      }
    };
  });
  