    function calculate(a, b){
        return a + b;
    }
    function display(){
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let result = calculate(num1, num2);

        document.getElementById("result").textContent = "result: " + result;
    }

    const button = document.getElementById("booto");
    button.addEventListener("click", display );