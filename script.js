function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculate() {
    let expression = document.getElementById('display').innerText;
    
    // Replace scientific functions with JavaScript equivalents
    expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
    expression = expression.replace(/log\(/g, 'Math.log10(');
    expression = expression.replace(/exp\(/g, 'Math.exp(');
    expression = expression.replace(/\^/g, '**');
    expression = expression.replace(/(\d+)\)/g, '$1)');
    
    // Replace additional functions
    expression = expression.replace(/Math.PI/g, 'Math.PI');
    expression = expression.replace(/Math.E/g, 'Math.E');
    expression = expression.replace(/Math.pow\(/g, 'Math.pow(');
    expression = expression.replace(/Math.abs\(/g, 'Math.abs(');
    expression = expression.replace(/Math.round\(/g, 'Math.round(');
    expression = expression.replace(/Math.ceil\(/g, 'Math.ceil(');
    expression = expression.replace(/Math.floor\(/g, 'Math.floor(');
    
    // Evaluate the expression
    try {
        const result = eval(expression);
        document.getElementById('display').innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}
