function calculate(operator) {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const resultDiv = document.getElementById("result");
  
    // Clear the result section before displaying new output
    resultDiv.innerHTML = "";
  
    // Input validation
    if (input1 === "" || input2 === "") {
      if (input1 === "" && input2 === "") {
        resultDiv.innerHTML = "Error: Input1 and Input2 are empty, please enter numbers.";
      } else if (input1 === "") {
        resultDiv.innerHTML = "Error: Input1 is empty, please enter a number.";
      } else {
        resultDiv.innerHTML = "Error: Input2 is empty, please enter a number.";
      }
      return;
    }
  
    // Convert inputs to numbers
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
  
    // Perform the calculation
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        resultDiv.innerHTML = `Input1 = ${num1} <br> Input2 = ${num2} <br> Input1 + Input2 = ${num1} + ${num2} = ${result}`;
        break;
      case "-":
        result = num1 - num2;
        resultDiv.innerHTML = `Input1 = ${num1} <br> Input2 = ${num2} <br> Input1 - Input2 = ${num1} - ${num2} = ${result}`;
        break;
      case "*":
        result = num1 * num2;
        resultDiv.innerHTML = `Input1 = ${num1} <br> Input2 = ${num2} <br> Input1 * Input2 = ${num1} * ${num2} = ${result}`;
        break;
      case "/":
        if (num2 === 0) {
          resultDiv.innerHTML = `Input1 = ${num1} <br> Input2 = ${num2} <br> Input1 / Input2 = ${num1} / ${num2} = Infinity`;
        } else {
          result = num1 / num2;
          resultDiv.innerHTML = `Input1 = ${num1} <br> Input2 = ${num2} <br> Input1 / Input2 = ${num1} / ${num2} = ${result}`;
        }
        break;
      default:
        resultDiv.innerHTML = "Error: Invalid operation.";
    }
  }
  
  function clearResult() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
  }