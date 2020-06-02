document.getElementById("switch").onchange = function() {
    let block = document.getElementsByClassName("d-block");
    let none = document.getElementsByClassName("d-none");
    if (this.checked) {
        for (let i = 0; i < block.length; i++) {
            block[i].style.display = "none";
            none[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < block.length; i++) {
            block[i].style.display = "block";
            none[i].style.display = "none";
        }
    }
}