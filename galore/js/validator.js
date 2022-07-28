const nameInput = document.querySelector('.username');
const telInput = document.querySelector('.tel');
const validateName = (input) =>{
    const patern = /[^A-Za-zА-Яа-я]/i;
    const patternValid = patern.test(input.target.value)
    if (patternValid) {
        nameInput.setCustomValidity("Поле может содержать только буквы латинского и русского алфавита");
      } else {
        nameInput.setCustomValidity("");
    }
}
nameInput.addEventListener("input", validateName);

const validNumberPhone = (phone, data) => {
  if(data === null) {return phone}
  const clearphone = phone.replace(/[^\d]/g, '')  
  let slicePhone =  '7' + clearphone.slice(1, 11);
  let solution = '';   
  for (let i = 0; i < slicePhone.length; i += 1 ){      
    switch (i) {
      case 0: 
        solution += '+' + slicePhone[i]
        break;
      case 1:
        solution += '(' + slicePhone[i]
        break;
    case 2:
    case 5:
    case 6:
    case 8:
    case 10:
      solution +=  slicePhone[i]
      break;
    case 3:
      solution +=  slicePhone[i] + ')'
      break;
    case 4:
    case 7:
    case 9:
      solution +='-' + slicePhone[i]
      break
    default: ''
  }
}
return solution;
}
const validateTel = (input) =>{
  const validStyle = validNumberPhone(input.target.value, input.data)
  input.target.value = validStyle
}
telInput.addEventListener("input", validateTel);
