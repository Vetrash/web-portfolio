const nameInput = document.querySelector('.username');
const validateName = (input) =>{
    const patern = /[^A-Za-zА-Яа-я]/i;
    const patternValid = patern.test(input.target.value)
    if (patternValid) {
        nameInput.setCustomValidity("Поле может содержать только буквы латинского и русского алфавита без пробелов");
      } else {
        nameInput.setCustomValidity("");
    }
}
nameInput.addEventListener("input", validateName);

