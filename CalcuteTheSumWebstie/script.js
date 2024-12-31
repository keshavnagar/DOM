function CalculateSum() {
    const firstNumber = document.getElementById("firstNumber").value;
   
    const secondNumber = document.getElementById("secondNumber").value;
   
    const sum = parseInt(firstNumber)+parseInt(secondNumber);

    const finalSum = document.getElementById("finalSum");

    finalSum.innerHTML = sum;
}