/**
 * Created by julia on 10.06.2016.
 */

document.addEventListener("DOMContentLoaded", function(event) {

    var hintElements = document.getElementsByClassName("js-hint");

    for (var i = 0; i < hintElements.length; i++) {
        hintElements[i].addEventListener("click", showHint);
    }

    function showHint(event) {
        event.preventDefault();

        if (this.hint == null) {
            var hint = document.createElement("div");
            hint.innerHTML = this.dataset["hint"];
            hint.className = "hint";
            hint.style.left = this.offsetLeft + this.offsetWidth + "px";
            hint.style.top = this.offsetTop + "px";
            document.body.appendChild(hint);

            this.hint = hint;
        }
    }

    document.body.addEventListener("click", closeHint);
    function closeHint(event) {

        if (event.target.className != "js-hint") {
            var hintElements = document.getElementsByClassName("hint");

            for (var i = 0; i < hintElements.length; i++) {
                hintElements[i].remove();
            }
        }
    }
});
