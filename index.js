document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript Loaded");
  const display = document.getElementById("display");
  console.log(display);  // Should log the input element

  let secondToggle = false;
  let isLogBase = false;
  let lastActionWasCalculate = false;  // Track if last action was calculate

  window.appendToDisplay = function(input) {
    console.log(`Appending: ${input}`);  // Log what is being appended
    
    if (lastActionWasCalculate) {
      if (!("+-*/^.e+mod yroot  log base ".includes(input))) 
        if(input !=3.141592653589793 || input!=2.718281828459045)
          display.value = "";  // Clear the display if the last action was calculate
      lastActionWasCalculate = false;  // Reset the flag
    }

    if (input === Math.PI.toFixed(15) || input === Math.E.toFixed(15)) {
        //clearDisplay();
      lastActionWasCalculate = true;
    }

    if (display.value === "Error") {
      display.value = "";
    }

    display.value += input;
  }

  window.clearDisplay = function() {
      display.value = "";
    isLogBase = false;  // Reset the log base flag
  }

  window.calculate = function() {
    display.value = display.value.replaceAll("^", "**");
    display.value = display.value.replaceAll("mod", "%");
    display.value = display.value.replaceAll("exp", "10*");
    // Handle custom yroot operator
    const yrootRegex = /(\d+(\.\d+)?) yroot (\d+(\.\d+)?)/g;
    display.value = display.value.replace(yrootRegex, (match, base, _, root) => {
      return `Math.pow(${base}, 1 / ${root})`;
    });

    // Handle custom log base operator
    if (isLogBase) {
      const logBaseRegex = /(\d+(\.\d+)?) log base (\d+(\.\d+)?)/g;
      display.value = display.value.replace(logBaseRegex, (match, value, _, base) => {
        return `Math.log(${value}) / Math.log(${base})`;
      });
      isLogBase = false;  // Reset the log base flag after calculation
    }

    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }

    lastActionWasCalculate = true;  // Set the flag to true after calculation
  }

  window.squareRoot = function() {
    try {
      display.value = Math.sqrt(parseFloat(display.value));
    } catch (error) {
      display.value = "Error";
    }

    lastActionWasCalculate = true;  // Set the flag to true after calculation
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

    lastActionWasCalculate = true;  // Set the flag to true after calculation
  }

  window.divide = function() {
    try {
      display.value = 1 / parseFloat(display.value);
    } catch (error) {
      display.value = "Error";
    }

    lastActionWasCalculate = true;  // Set the flag to true after calculation
  }

  window.abs = function() {
    try {
      display.value = Math.abs(parseFloat(display.value));
    } catch (error) {
      display.value = "Error";
    }

    lastActionWasCalculate = true;  // Set the flag to true after calculation
  }

  window.tenPower = function() {
    try {
      display.value = Math.pow(10, parseFloat(display.value));
    } catch (error) {
      display.value = "Error";
    }

    lastActionWasCalculate = true;  // Set the flag to true after calculation
  }

  window.log = function() {
    try {
      display.value = Math.log10(parseFloat(display.value));
    } catch (error) {
      display.value = "Error";
    }

    lastActionWasCalculate = true;  // Set the flag to true after calculation
  }

  window.ln = function() {
    try {
      display.value = Math.log(parseFloat(display.value));
    } catch (error) {
      display.value = "Error";
    }

    lastActionWasCalculate = true;  // Set the flag to true after calculation
  }

  window.plusMinus = function() {
    try {
      display.value = parseFloat(display.value) * -1;
    } catch (error) {
      display.value = "Error";
    }

    lastActionWasCalculate = true;  // Set the flag to true after calculation
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

    lastActionWasCalculate = true;  // Set the flag to true after calculation
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
        lastActionWasCalculate = true;  // Set the flag to true after calculation
      };

      document.getElementById('squareRoot').innerText = "³√x";
      document.getElementById('squareRoot').onclick = function() {
        try {
          display.value = Math.cbrt(parseFloat(display.value));
        } catch (error) {
          display.value = "Error";
        }
        lastActionWasCalculate = true;  // Set the flag to true after calculation
      };

      document.getElementById('yRoot').innerText = "y√x";
      document.getElementById('yRoot').onclick = function() {
        appendToDisplay(' yroot ');
        lastActionWasCalculate = false;  // Do not set flag for operators
      };

      document.getElementById('tenPower').innerText = "2^x";
      document.getElementById('tenPower').onclick = function() {
        try {
          display.value = Math.pow(2, parseFloat(display.value));
        } catch (error) {
          display.value = "Error";
        }
        lastActionWasCalculate = true;  // Set the flag to true after calculation
      };

      document.getElementById('log').innerText = "log y (x)";
      document.getElementById('log').onclick = function() {
        appendToDisplay(' log base ');
        isLogBase = true;
        lastActionWasCalculate = false;  // Do not set flag for operators
      };

      document.getElementById('ln').innerText = "e^x";
      document.getElementById('ln').onclick = function() {
        try {
          display.value = Math.exp(parseFloat(display.value));
        } catch (error) {
          display.value = "Error";
        }
        lastActionWasCalculate = true;  // Set the flag to true after calculation
      };
    } else {
      document.getElementById('square').innerText = "x²";
      document.getElementById('square').onclick = function() {
        try {
          display.value = Math.pow(parseFloat(display.value), 2);
        } catch (error) {
          display.value = "Error";
        }
        lastActionWasCalculate = true;  // Set the flag to true after calculation
      };

      document.getElementById('squareRoot').innerText = "²√x";
      document.getElementById('squareRoot').onclick = window.squareRoot;

      document.getElementById('yRoot').innerText = "x^y";
      document.getElementById('yRoot').onclick = function() {
        appendToDisplay('^');
        lastActionWasCalculate = false;  // Do not set flag for operators
      };

      document.getElementById('tenPower').innerText = "10^x";
      document.getElementById('tenPower').onclick = window.tenPower;

      document.getElementById('log').innerText = "log";
      document.getElementById('log').onclick = window.log;

      document.getElementById('ln').innerText = "ln";
      document.getElementById('ln').onclick = window.ln;
      
    }
  };
});
