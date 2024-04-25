var clients = [
  {
    name: "Volodymyr Parkhomenko",
    surname: "Olegovich",
    login: +380671234567,
    password: true,
    cardPrivatbank: {
      number: 4149243556435478,
      balance: "46000 UAH",
    },
  },
  {
    name: "Olga Musaeva",
    surname: "Volodymyrivna",
    login: +380677654321,
    password: false,
    cardPrivatbank: {
      number: 4149356468907654,
      balance: "100000 UAH",
    },
  },
];
//Викликаємо функцію бази даних клієнтів
function customerDatabase(client) {
  var currentClient;
  if (client.login === true) {
    currentClient = function () {
      alert("");
    };
  }
}

//<h2 class="fw-light">Введіть логін та пароль:</h2>
//<input type="login" id="loginInput" />
//<input type="password" id="passwordInput" />
//<button id="myButton" onclick="customerDatabase()">Логін</button>
//<p id="output"></p>
