document.addEventListener("DOMContentLoaded", function () {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const resultDisplay = document.getElementById("result");
    
    function calculate(operation) {
        const val1 = input1.value.trim();
        const val2 = input2.value.trim();
        
        if (val1 === "" || val2 === "") {
            resultDisplay.innerHTML = `Error: ${val1 === "" ? "Input1" : "Input2"} is empty, please enter a number.`;
            return;
        }
        
        const num1 = parseFloat(val1);
        const num2 = parseFloat(val2);
        
        if (isNaN(num1) || isNaN(num2)) {
            resultDisplay.innerHTML = "Error: Please enter valid numbers.";
            return;
        }
        
        let result;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    resultDisplay.innerHTML = `Input1 = ${num1}<br>Input2 = ${num2}<br>Input1 / Input2 = ${num1} / ${num2} = Infinity`;
                    return;
                }
                result = num1 / num2;
                break;
            default:
                result = "Invalid operation";
        }
        
        resultDisplay.innerHTML = `Input1 = ${num1}<br>Input2 = ${num2}<br>Result = ${result}`;
    }
    
    document.getElementById("add").addEventListener("click", () => calculate("add"));
    document.getElementById("subtract").addEventListener("click", () => calculate("subtract"));
    document.getElementById("multiply").addEventListener("click", () => calculate("multiply"));
    document.getElementById("divide").addEventListener("click", () => calculate("divide"));
    document.getElementById("clear").addEventListener("click", () => {
        input1.value = "";
        input2.value = "";
        resultDisplay.innerHTML = "";
    });
});