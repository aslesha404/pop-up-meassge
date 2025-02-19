// javascript code
let pop_up = document.getElementById("pop_up")
function open_pop_up(){
    pop_up.classList.add("open_pop_up");
}

function close_pop_up(){
    pop_up.classList.remove("open_pop_up");
}
// function close_pop_up(){
//     setTimeout(() => {
//         pop_up.classList.remove("open_pop_up");
//     }, 5000); // Closes after 500ms
// }
// function open_pop_up(message) {
//     document.querySelector(".pop_up p").textContent = "help me ";
//     pop_up.classList.add("open_pop_up");
// }


// let pop_up = document.getElementById("pop_up");

// function open_pop_up(message) {
//     document.querySelector(".pop_up p").textContent = message;
//     pop_up.classList.add("open_pop_up");
// }

// function close_pop_up() {
//     pop_up.classList.remove("open_pop_up");
// }
