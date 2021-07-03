// const naira = document.getElementById('naira');

// naira.addEventListener("input", nairaConverter);

// function nairaConverter(e){
//     let nairaC = e.target.value;
//     document.getElementById('dollars').value= nairaC / 493
//     document.getElementById('pounds').value= nairaC / 710
//     document.getElementById('euros').value= nairaC / 595
// }

const password1 = document.Prudence.p1;
const password2 = document.Prudence.p2;

const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    if (password1.value != password2.value) {
        alert('Passwords does not match');
        return false;
    } 
    else {
        alert('form submitted');
    }
})