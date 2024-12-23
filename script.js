function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let expression = document.getElementById('display').value;
    try {
        expression = expression.replace(/sqrt/g, 'Math.sqrt'); // Handle sqrt as Math.sqrt
        expression = expression.replace(/log/g, 'Math.log10'); // Handle log as Math.log10
        expression = expression.replace(/Math\.PI/g, Math.PI); // Handle PI
        expression = expression.replace(/Math\.E/g, Math.E); // Handle E
        let result = eval(expression); // Evaluate the expression
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
