document.addEventListener("DOMContentLoaded", function () {
  //Доступ до елементів DOM та встановлення обробник подій "Вхід"
  var loginButton = document.getElementById("loginButton");
  if (loginButton) {
    loginButton.addEventListener("click", customerDatabase);
  }
});

var clients = [
  {
    name: "Volodymyr",
    surname: "Parkhomenko",
    patronymic: "Olegovich",
    login: "+380671234567",
    password: "Volod123",
    cardKredobank: {
      number: 4149243556435478,
      balance: "46000 UAH",
    },
  },
  {
    name: "Olga",
    surname: "Musaeva",
    patronymic: "Volodymyrivna",
    login: "+380677654321",
    password: "Olga1234",
    cardKredobank: {
      number: 4149356468907654,
      balance: "100000 UAH",
    },
  },
];

//Викликаємо функцію бази даних клієнтів
function customerDatabase() {
  var loginInput = document.getElementById("loginInput").value;
  var passwordInput = document.getElementById("passwordInput").value;
  var isValidClient = false;

  for (var i = 0; i < clients.length; i++) {
    if (
      clients[i].login === loginInput &&
      clients[i].password === passwordInput
    ) {
      isValidClient = true;
      break;
    }
  }
  //Перевірка логіну та паролю
  if (!loginInput || !passwordInput) {
    alert("Введіть логін та пароль!");
  } else if (!isValidClient) {
    alert("Ви ввели неправильний пароль або логін!");
  } else {
    window.location.href = "office_2.html"; // Перенаправлення на сторінку 2
  }
}

//Обробник подій для кнопки "Вийти"
document.addEventListener("DOMContentLoaded", function () {
  var logoutButton = document.getElementById("logoutButton");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      window.location.href = "office_1.html"; // Перенаправлення на сторінку логіна
    });
  }
});

function showPersonalPage(client) {
  //Відображення інформації про клієнта на сторінці особистого кабінету
  document.getElementById("header").innerHTML =
    "<h1 class='title'>ЛАСКАВО ПРОСИМО, " +
    client.surname +
    " " +
    client.name +
    " " +
    client.patronymic +
    "</h1>" +
    "<button id='logoutButton' class='btn btn-primary'>Вийти</button>";

  document.getElementById("cardNumber").innerText =
    "Номер картки: " + client.cardKredobank.number;
  document.getElementById("cardBalance").innerText =
    "Баланс на картці: " + client.cardKredobank.balance;
}
