let input_1 = document.querySelector('#email');
let input_2 = document.querySelector('#email-2');
let span_1 = document.querySelector('#span-1');
let span_2 = document.querySelector('#span-2');
let button_1 = document.querySelectorAll('button')[0];
let button_2 = document.querySelectorAll('button')[1];

console.log(button_1);

let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function inputValidation(input, inputspan) {
    if(input.value.match(regex) || input.value == '') {
        input.style.border = "0.0625rem solid #07043B";
        inputspan.innerText = " ";
        return true;
    } else {
        inputspan.innerText = "Please check your email";
        if(input == input_1) {
            inputspan.style.color = '#EF4877';
            inputspan.style.fontSize = '12px';
        } else {
            inputspan.style.color = "#FFFFFF";
            inputspan.style.display = 'block';
            inputspan.style.fontSize = '12px';
        }
        input.style.border = "0.0625rem solid #EF4877";
        return false;
    }
}

button_1.addEventListener('click', () => {
    inputValidation(input_1, span_1);
})

button_2.addEventListener('click', () => {
    inputValidation(input_2, span_2);
})