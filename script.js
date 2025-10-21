// function myBox1(){
//     box = document.getElementById('box-1');
//     const boxColor = box.innerHTML;
//     box.style.backgroundColor = boxColor;
// }

function fillColor(clr) {
  const color = clr.getAttribute('data-color'); 
  clr.style.backgroundColor = color;            
}


// function myBox2(){
//     box = document.getElementById('box-2');
//     const boxColor = box.innerHTML;
//     box.style.backgroundColor = boxColor;
// }

// function myBox3(){
//     box = document.getElementById('box-3');
//     const boxColor = box.innerHTML;
//     box.style.backgroundColor = boxColor;
// }

// function myBox4(){
//     box = document.getElementById('box-4');
//     const boxColor = box.innerHTML;
//     box.style.backgroundColor = boxColor;
// }

// function greetUser(){
    
//     input = document.getElementById('inputName');
//     const userName = input.value.trim();
//     greet = document.getElementById('greeting');
//     const greeting = greet.innerText;
//     greet.innerHTML = greeting + ', ' + userName;


// }

function greetUser() {
    
    const input = document.getElementById('inputName');
    const userName = input.value.trim();
    const greet = document.getElementById('greeting');

    if (userName) {
        greet.innerText = `Hello, ${userName}`;
    } else {
        greet.innerText = 'Hello';
    }
}

// function greetUser() {
  
//   const input = document.getElementById('inputName').value.trim();
//   const greet = document.getElementById('greeting');

//   if (input) {
//     greet.textContent = 'Hello, ${input}';
//   } else {
//     greet.textContent = 'Hello';
//   }
// }

