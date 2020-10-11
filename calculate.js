window.addEventListener("DOMContentLoaded", function() {
    let result = document.getElementById("resultAnswer");

    let buttons = document.getElementsByTagName("button");
    let allBtns = [...buttons];
    let isEq = document.getElementById("=");
    let query = [];


    allBtns.forEach(function(button) {
        function logger(e) {
            if (button.id != "=") {
                query.push(button.id);

            }
            query.toLocaleString();

            result.value = query.join("");
            frontEndr = result.value;
            var backEndr = Array(frontEndr);
            console.log(backEndr);
        }

        button.addEventListener("click", logger);

    });
    let clearAll = document.getElementById("AC");

    function reloadAll() {
        location.reload();
    }

    clearAll.addEventListener("click", reloadAll);

    function equal() {
        let str = result.value;
        let finalResult = eval(str);
        result.value = finalResult;
    }
    isEq.addEventListener("click", equal);


});