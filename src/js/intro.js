const btn = document.querySelectorAll('.tab-btn');

for(let i=0; i<btn.length; i++){
    btn[i].onclick = function(e){
        
        const thisIndex = Array.prototype.indexOf.call(btn, e.currentTarget) + 1;
        const fileName = '../src/ajax_includes/intro' + thisIndex + '.html';
        let xhttp = new XMLHttpRequest();

        for(var j = 0; j<btn.length; j++){
          btn[j].classList.remove('active');
          e.target.classList.add('active');
        }

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById('ajax_div').innerHTML = this.responseText;
            }
        };
        xhttp.open('GET', fileName, true);
        xhttp.send();

    }

    document.body.onload = function(e) {
      const thisIndex = Array.prototype.indexOf.call(btn, e.currentTarget) + 2;
        const fileName = '../src/ajax_includes/intro' + thisIndex + '.html';
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById('ajax_div').innerHTML = this.responseText;
            }
        };
        xhttp.open('GET', fileName, true);
        xhttp.send();
    }
}


// ACCODION
const question = document.querySelectorAll(".panel-question");
const heading = document.querySelectorAll(".panel-heading");
const answer = document.querySelectorAll(".panel-body");

console.log(question)


for(let i = 0; i < heading.length; i++){  
  heading[i].addEventListener('click', (e) => {
    for(let j = 0; j < question.length; j++) {
      question[j].classList.remove('active');
      e.target.parentNode.classList.add('active');
      console.log(e.target)
      //activateBody();
    } 
  })
}

function activateBody() {
  for (let x = 0; x < answer.length; x++) {
    answer[x].style.display = 'none'
  }
  let panelActive = document.querySelector('.panel-question.active .panel-body');
  panelActive.style.display = "block"
}

activateBody()

btn.addEventListener('click', () => {
  for(let i = 0; i < answer.length; i++) {
    answer[i].style.display = 'none';
  }
})


