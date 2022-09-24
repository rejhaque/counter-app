// prathomic count value nilam
let count = 0;

// value ta ar button gula select kora
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// add function to all the buttons
// button er upore amra ekta forEach function loop through korbo else if dia.

btns.forEach(function(btn) {
     btn.addEventListener('click', function(e){
          const styles = e.currentTarget.classList;
          if(styles.contains("decrease")){
               count--;
          }
          else if(styles.contains("increase")){
               count++;
          }
          else{
               count = 0
          }
          if(count > 0){
               value.style.color = "green"
          }
          if(count < 0){
               value.style.color = "red"
          }
          if(count === 0){
               value.style.color = "blue"
          }
          value.textContent = count;
     })
});