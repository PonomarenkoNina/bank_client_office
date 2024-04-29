var clients = [
  {
    name: "Volodymyr Parkhomenko",
    surname: "Olegovich",
    login: "+380671234567",
    password: "Volod123",
    cardKredobank: {
      number: 4149243556435478,
      balance: "46000 UAH",
    },
  },
  {
    name: "Olga Musaeva",
    surname: "Volodymyrivna",
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
      window.location.href = "office_2.html"; // Перенаправлення на сторінку 2
      break;
    }
  }
  //Перевірка логіну та паролю
  if (!isValidClient) {
    alert("Ви ввели неправильний пароль або логін!");
  }
}
function showPersonalPage(client) {
  // Відображення інформації про клієнта на сторінці особистого кабінету
  document.getElementById("header").innerHTML =
    "<h1 class='title'>Ласкаво просимо, " +
    client.surname +
    " " +
    client.name +
    " " +
    client.patronymic +
    "</h1>" +
    "<button class='btn btn-danger' id='logoutButton'>Вийти</button>";

  document.getElementById("cardNumber").innerText =
    "Номер картки: " + client.cardKredobank.number;
  document.getElementById("cardBalance").innerText =
    "Баланс на картці: " + client.cardKredobank.balance;

  // Додавання обробника подій для кнопки "Вийти"
  document
    .getElementById("logoutButton")
    .addEventListener("click", function () {
      window.location.href = "office_1.html"; // Перенаправлення на сторінку 1
    });
}
document.getElementById("myButton").addEventListener("click", customerDatabase);
