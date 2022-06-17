const input = document.querySelector("input");
const form = document.querySelector("form");
const errorP = document.querySelector("p.error");

form.addEventListener("submit", function (event) {

    event.preventDefault();
    if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        console.log("valid");
        errorP.classList.remove("show");
        input.classList.remove("error");
    }
    else {
        console.log(" invalid");
        input.classList.add("error");
        errorP.classList.add("show");
    }

});