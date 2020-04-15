"use strict";
console.log("<------task-07------>");
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length > 4 && login.length < 16;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) && !isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    console.log("Логин успешно добавлен");
  } else if (!isLoginValid(login) && !isLoginUnique(allLogins, login)) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    console.log("Такой логин уже используется!");
  }
};

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
addLogin(logins, "Mangbtdtbdgto"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
