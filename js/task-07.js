const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if (login.length > 4 && login.length < 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return true;
  }
  return false;
};

const addLogin = function(allLogins, login) {
  if (
    isLoginValid(login) === true &&
    isLoginUnique(allLogins, login) === false
  ) {
    allLogins.push(login);
    console.log("Логин успешно добавлен");
  } else if (
    isLoginValid(login) === false &&
    isLoginUnique(allLogins, login) === false
  ) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else if (
    isLoginValid(login) === true &&
    isLoginUnique(allLogins, login) === true
  ) {
    console.log("Такой логин уже используется!");
  }
};

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(addLogin(logins, "Mangbtdtbdgto")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
