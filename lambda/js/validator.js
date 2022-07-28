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

const dateInput = document.querySelector('.date');
const validateDate = (input) =>{
  const dateUser = new Date(input.target.value)
  const nowDate = new Date();
  if (nowDate.getTime() >= dateUser.getTime()) {
    dateInput.setCustomValidity("Дата не может быть меньше текущей");
    } else {
      dateInput.setCustomValidity("");
  }
}
dateInput.addEventListener("input", validateDate);