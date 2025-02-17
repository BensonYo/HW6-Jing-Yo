function calculate(operator) {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let resultDiv = document.getElementById("result");

    if (input1 === "" || input2 === "") {
        resultDiv.innerHTML = `Error: One or both inputs are empty. Please enter a number.`;
        return;
    }

    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultDiv.innerHTML = `Input1 = ${num1}<br>Input2 = ${num2}<br>Input1 / Input2 = ${num1} / ${num2} = Infinity`;
                return;
            }
            result = num1 / num2;
            break;
    }

    resultDiv.innerHTML = `Input1 = ${num1}<br>Input2 = ${num2}<br>Result: ${num1} ${operator} ${num2} = ${result}`;
}

function clearResult() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}