// console.log("Hello")
const btn_submit = document.querySelector('.submit');

btn_submit.addEventListener("click", (e) => {
    e.preventDefault();
    getFormValue();
});


const fname = document.querySelector('#fname');
const lname = document.querySelector("#lname");
function getFormValue(){
    console.log(fname.value);
    console.log(lname.value);
}

