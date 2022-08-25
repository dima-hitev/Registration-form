'use strict'

let users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []

const saveUser = (userData) => {
  let result = users.find(user => user.email == userData.email)

  if (!result) {
    users.push(userData)
    localStorage.users = JSON.stringify(users)
    return true
  } else {
    return false
  }
}

const validateUsers = (userData) => {
  users = JSON.parse(localStorage.getItem('users'))

  let result = users.find(user => user.email == userData.email && user.password == userData.password)

  if (result) {
    return true
  }

  return false
}

let emailRegistrationNull = document.querySelector('#email-registration_null')
let passwordRegistrationNull = document.querySelector('#password-registration_null')
let checkboxRegistrationNull = document.querySelector('#checkbox-registration_null')

let emailAuthorizationNull = document.querySelector('#email-authorization_null')
let passwordAuthorizationNull = document.querySelector('#password-authorization_null')
let checkboxAuthorizationNull = document.querySelector('#checkbox-authorization_null')

let emailTitleRegistration = document.querySelectorAll('.form__item-title')[0]
let passwordTitleRegistration = document.querySelectorAll('.form__item-title')[1]
let emailTitleAuthorization = document.querySelectorAll('.form__item-title')[2]
let passwordTitleAuthorization = document.querySelectorAll('.form__item-title')[3]

let registrationEmail = document.querySelectorAll('.form__item-input')[0]
let registrationPassword = document.querySelectorAll('.form__item-input')[1]
let authorizationEmail = document.querySelectorAll('.form__item-input')[2]
let authorizationPassword = document.querySelectorAll('.form__item-input')[3]

let itemLabelRegistration = document.querySelectorAll('.item__label')[0]
let itemLabelAuthorization = document.querySelectorAll('.item__label')[1]
let itemRegistration = document.querySelectorAll('.item')[0]
let itemAuthorization = document.querySelectorAll('.item')[1]

let passwordValid = document.querySelector('#password_valid')
let emailValid = document.querySelector('#email_valid')
let authorizationValid = document.querySelector('#authorization_valid')

let formAuthorizationLink = document.querySelector('.form__link-authorization')
let formRegistrationLink = document.querySelector('.form__link-registration')
let formRegistration = document.querySelector('.form-registration')
let formAuthorization = document.querySelector('.form-authorization')

let registrationButton = document.querySelectorAll('.form__submit')[0]
let authorizationButton = document.querySelectorAll('.form__submit')[1]

let checkRegistration = document.querySelector('#check_registration')
let checkAuthorization = document.querySelector('#check_authorization')


const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const authorization = () => {
  alert('Успешный вход')
}

const authorizationError = () => {
  alert('Пользователь с таким email/паролем не найден')
}

const registration = () => {
  alert('Вы успешно зарегистрировались')
}

const registrationError = () => {
  alert('Email уже используется')
}

let user = {}
let emailValidUser = false
let passwordValidUser = false
let checkedValid = false

let valueEmailRegistration = ''

registrationEmail.addEventListener('input', (e) => {
  valueEmailRegistration = e.target.value.trim()
})

let valueEmailAuthorization = ''

authorizationEmail.addEventListener('input', (e) => {
  valueEmailAuthorization = e.target.value.trim()
})

let valuePasswordRegistration = ''

registrationPassword.addEventListener('input', (e) => {
  valuePasswordRegistration = e.target.value.trim()
})

let valuePasswordAuthorization = ''

authorizationPassword.addEventListener('input', (e) => {
  valuePasswordAuthorization = e.target.value.trim()
})

let checkRegistrationChecked = false

checkRegistration.addEventListener('change', (e) => {
  checkRegistrationChecked = e.target.checked
})

let checkAuthorizationChecked = false

checkAuthorization.addEventListener('change', (e) => {
  checkAuthorizationChecked = e.target.checked
})

formAuthorizationLink.addEventListener('click', (e) => {
  formRegistration.style.display = 'none'
  formAuthorization.style.display = 'block'
})

formRegistrationLink.addEventListener('click', (e) => {
  formRegistration.style.display = 'block'
  formAuthorization.style.display = 'none'
})

registrationButton.addEventListener('click', (e) => {
  e.preventDefault()
  validRegistration()
})


const validRegistration = () => {

  if (valueEmailRegistration.length == '') {
    emailRegistrationNull.style.display = 'block'
    emailValid.style.display = 'none'
    emailTitleRegistration.style.color = '#CB2424'
    emailTitleRegistration.classList.add('error_color-input')
    registrationEmail.style.borderColor = '#CB2424'
    emailValidUser = false
  } else {
    emailRegistrationNull.style.display = 'none'
    emailTitleRegistration.style.color = '#787878'
    emailTitleRegistration.classList.remove('error_color-input')
    registrationEmail.style.borderColor = '#787878'

    if (!validateEmail(valueEmailRegistration)) {
      emailValid.style.display = 'block'
      registrationEmail.style.borderColor = '#CB2424'
      emailTitleRegistration.style.color = '#CB2424'
      emailTitleRegistration.classList.add('error_color-input')
      emailValidUser = false
    } else {
      emailValid.style.display = 'none'
      user.email = valueEmailRegistration
      emailValidUser = true
    }
  }

  if (valuePasswordRegistration.length == '') {
    passwordRegistrationNull.style.display = 'block'
    passwordValid.style.display = 'none'
    passwordTitleRegistration.style.color = '#CB2424'
    registrationPassword.style.borderColor = '#CB2424'
    passwordTitleRegistration.classList.add('error_color-input')
    passwordValidUser = false
  } else {
    passwordRegistrationNull.style.display = 'block'
    registrationPassword.style.borderColor = '#787878'
    passwordTitleRegistration.style.color = '#787878'
    passwordTitleRegistration.classList.remove('error_color-input')

    if (valuePasswordRegistration.length < 8) {
      passwordRegistrationNull.style.display = 'none'
      passwordValid.style.display = 'block'
      passwordTitleRegistration.style.color = '#CB2424'
      registrationPassword.style.borderColor = '#CB2424'
      passwordTitleRegistration.classList.add('error_color-input')
      passwordValidUser = false
    } else {
      passwordRegistrationNull.style.display = 'none'
      passwordValid.style.display = 'none'
      user.password = valuePasswordRegistration
      passwordValidUser = true
    }
  }

  if (!checkRegistrationChecked) {
    checkboxRegistrationNull.style.display = 'block'
    itemLabelRegistration.classList.add('error_color-checkbox')
    itemRegistration.classList.add('error_color-check')
    checkedValid = false
  } else {
    checkboxRegistrationNull.style.display = 'none'
    itemLabelRegistration.classList.remove('error_color-checkbox')
    itemRegistration.classList.remove('error_color-check')
    checkedValid = true
  }

  if (emailValidUser && passwordValidUser && checkedValid) {
    if (saveUser(user)) {
      setTimeout(registration, 100)
      setTimeout(location.reload(), 100)
    } else {
      setTimeout(registrationError, 100)
      setTimeout(location.reload(), 100)
    }
  }
}

authorizationButton.addEventListener('click', (e) => {
  e.preventDefault()
  validAuthorization()
})

const validAuthorization = () => {

  if(valueEmailAuthorization.length == '') {
    emailAuthorizationNull.style.display = 'block'
    emailTitleAuthorization.style.color = '#CB2424'
    authorizationEmail.style.borderColor = '#CB2424'
    emailTitleAuthorization.classList.add('error_color-input')
  } else {
    emailAuthorizationNull.style.display = 'none'
    emailTitleAuthorization.style.color = '#787878'
    authorizationEmail.style.borderColor = '#787878'
    emailTitleAuthorization.classList.remove('error_color-input')
    user.email = valueEmailAuthorization
  }

  if (valuePasswordAuthorization.length == '') {
    passwordAuthorizationNull.style.display = 'block'
    passwordTitleAuthorization.style.color = '#CB2424'
    authorizationPassword.style.borderColor = '#CB2424'
    passwordTitleAuthorization.classList.add('error_color-input')
  } else {
    passwordAuthorizationNull.style.display = 'none'
    passwordTitleAuthorization.style.color = '#787878'
    authorizationPassword.style.borderColor = '#787878'
    passwordTitleAuthorization.classList.remove('error_color-input')
    user.password = valuePasswordAuthorization
  }

  if (!checkAuthorizationChecked) {
    checkboxAuthorizationNull.style.display = 'block'
    itemLabelAuthorization.classList.add('error_color-checkbox')
    itemAuthorization.classList.add('error_color-check')
  } else {
    checkboxAuthorizationNull.style.display = 'none'
    itemLabelAuthorization.classList.remove('error_color-checkbox')
    itemAuthorization.classList.remove('error_color-check')
  }

  if (valueEmailAuthorization.length && valuePasswordAuthorization.length && checkAuthorizationChecked) {
    if (validateUsers(user)) {
      setTimeout(authorization, 100)
      authorizationValid.style.display = 'none'
    } else {
      setTimeout(authorizationError, 100)
      authorizationValid.style.display = 'block'
    }
  }
}