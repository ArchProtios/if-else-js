const text = document.querySelector("#myText")
const submit = document.querySelector("#mySubmit")
const result = document.querySelector("#resultElement")
let age = '';

submit.addEventListener( "click" , () => {
    if (age > 100) {
        result.textContent = `TOO OLD`
    } else if (age < 100) {
        result.textContent = `Yeah you are really sexy`
    } 
})