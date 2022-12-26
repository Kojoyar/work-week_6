// 9. Дан объект следующего вида: {
//     name: 'Jack',
//     age: 34,
//     work: 'IT',
//     hours: 23,
//    salary: 2300,
// experience: 450
// }, задача: добавить объекту методы: ходить на работу(при вызове этого метода, кол-во часов возрастает на 6, и зарплата тоже растет в пропорции 1час-100$), также должен быть метод Получить зарплату(зарплату можно получить только если уже есть мин. 3000$, после вызова этого метода ключи зарплата и наработанные часы должны быть обнулены, а в ключе опыт, необходимо хранить сумму всех отработанных часов)

// let obj = {
//   name: "Jack",
//   age: 34,
//   work: "IT",
//   hours: 23,
//   goToWork: function () {
//     this.hours += 6;
//     this.salary += 600;
//     return this.hours, this.salary;
//   },
//   toSalary: function () {
//     if (this.salary >= 3000) {
//       this.experience += this.hours;
//       this.hours = 0;
//       this.salary = 0;
//       return this.salary;
//     }
//   },
//   salary: 2300,
//   experience: 450,
// };
// console.log(obj.goToWork());
// console.log(obj.goToWork());
// console.log(obj.toSalary());
// console.log(obj.hours);
// console.log(obj);

// 10. Создать игру. Задача: создать программу, которая запрашивает у пользователя данные для 2х героев(сила(макс 100), ловкость(макс 100), стихия(огонь, земля, вода, воздух)), также каждому герою присваивается имя по умолчанию(герой 1, герой 2), каждая стихия повышает силу героя на определенное количество пунктов(огонь +20 к силе, воздух +15 к силе, вода +10 к силе, земля +5 к силе), после добавления героев в бд, устраивать между ними бой и выявлять победителя по следующим характеристикам(победил тот, у кого больше силы, если силы равны, побеждает тот, у кого больше ловкости, если все данные равны, то ничья), выводить информацию в виде имени победителя либо просто сообщение типа: Ничья, в том случае если победителя нет(решитьс помощью функций)

// let hero2 = +prompt("Enter hero 2").split(" ");

// 1. Дан список товаров следующего вида: [
//     {title: 'Samsung', price: 1000, count: 3, color: ['black', 'white', 'blue']},
//     {title: 'Apple', price: 1300, count: 2, color: ['green', 'space-gray']},
//     {title: 'Xiaomi', price: 600, count: 0, color: []},
//     {title: 'LG', price: 450, count: 5, color: ['black', 'white']},
//     {title: 'Sony', price: 700, count: 4, color: ['white', 'yellow', 'gray']}
// ], задача: запросить у пользователя информацию о том, какой телефон он бы хотел приобрести, затем предложить ему варианты расцветки телефона, после того как пользователь введет цвет, озвучить цену на товар и спросить будет ли он покупать, если ответ положительный то количество товара нужно уменьшить на 1, учесть, что товара может не быть на складе, в этом случае вывести сообщение типа: Извините, в данный момент товара нет на складе(решить с помощью функций)

// let products = [
//   {
//     title: "Samsung",
//     price: 1000,
//     count: 3,
//     color: ["black", "white", "blue"],
//   },
//   {
//     title: "Apple",
//     price: 1300,
//     count: 2,
//     color: ["green", "space-gray"],
//   },
//   {
//     title: "Xiaomi",
//     price: 600,
//     count: 0,
//     color: [],
//   },
//   {
//     title: "LG",
//     price: 450,
//     count: 5,
//     color: ["black", "white"],
//   },
//   {
//     title: "Sony",
//     price: 700,
//     count: 4,
//     color: ["white", "yellow", "gray"],
//   },
// ];

// function search() {
//   let orderBuy = prompt("Какой телефон вы хотели бы приобрести?");
//   let checkPhone = false;
//   for (let i in products) {
//     for (let j in products[i]) {
//       if (products[i][j] === orderBuy) {
//         console.log(products[i][j]);
//         checkPhone = true;
//       }
//     }
//   }

//   if (checkPhone === true) {
//     switch (orderBuy) {
//       case products[0].title:
//         samsung();
//         break;
//       case products[1].title:
//         apple();
//         break;
//       case products[2].title:
//         xiaomi();
//         break;
//       case products[3].title:
//         lg();
//         break;
//       case products[4].title:
//         sony();
//         break;
//     }
//   }

//   function samsung() {
//     alert(`Данный телефон есть в цвете: ${products[0].color}`);
//     console.log(products[0].color);
//   }
//   function apple() {
//     alert(`Данный телефон есть в цвете: ${products[1].color}`);
//     console.log(products[1].color);
//   }
//   function xiaomi() {
//     alert(`Данный телефон есть в цвете: ${products[2].color}`);
//     console.log(products[2].color);
//   }
//   function lg() {
//     alert(`Данный телефон есть в цвете: ${products[3].color}`);
//     console.log(products[3].color);
//   }
//   function sony() {
//     alert(`Данный телефон есть в цвете: ${products[4].color}`);
//     console.log(products[4].color);
//   }

//   let orderColor = prompt("Введите цвет");
//   searchPrice();

//   function searchPrice() {
//     switch (orderBuy) {
//       case products[0].title:
//         alert(`Цена на данный товар: ${products[0].price}$`);
//         console.log(products[0].price);
//         break;
//       case products[1].title:
//         alert(`Цена на данный товар: ${products[1].price}$`);
//         console.log(products[1].price);
//         break;
//       case products[2].title:
//         alert(`Цена на данный товар: ${products[2].price}$`);
//         console.log(products[2].price);
//         break;
//       case products[3].title:
//         alert(`Цена на данный товар: ${products[3].price}$`);
//         console.log(products[3].price);
//         break;
//       case products[4].title:
//         alert(`Цена на данный товар: ${products[4].price}$`);
//         console.log(products[4].price);
//         break;
//     }

//     let answ = confirm("Желаете купить данный товар?");
//     if (answ) deleteProducts();
//     else alert("Всего хорошего!");
//   }

//   function deleteProducts() {
//     for (let i in products) {
//       for (let j in products[i]) {
//         if (products[i][j] === orderBuy && products[i].count > 0) {
//           products[i].count--;
//           console.log(products[i]);
//           return main();
//         } else if (products[i][j] != orderBuy && products[i].count === 0) {
//           alert("Извините, в данный момент товара нет на складе");
//         }
//       }
//     }
//   }
// }

// function main() {
//   let orderMain = prompt("Посмотреть телефон(s), выйти из магазина(e)");
//   switch (orderMain) {
//     case "s":
//       search();
//       break;
//     case "e":
//       break;
//   }
// }

// main();

// 2. Дан список дел в формате: [
//     {id: 1, todo: 'Принять душ', done: false},
//     {id: 2, todo: 'Завтрак', done: false},
//     {id: 3, todo: 'Пойти на работу', done: false},
//     {id: 4, todo: 'Приготовить ужин', done: false},
//     {id: 5, todo: 'Лечь спать', done: false}
// ], задача: принимать от пользователя айди того, что он сделал и менять статус на true, также должна быть возможность добавлять новые пункты дел, учесть, что айди должен быть уникальным(решить с помощью функций)

// let workArr = [
//   { id: 1, todo: "Принять душ", done: false },
//   { id: 2, todo: "Завтрак", done: false },
//   { id: 3, todo: "Пойти на работу", done: false },
//   { id: 4, todo: "Приготовить ужин", done: false },
//   { id: 5, todo: "Лечь спать", done: false },
// ];

// let workFunc = (work) => {
//   let data = prompt("Enter id your work");
//   for (i of work) {
//     if (i.id == data) {
//       i.done = true;
//     }
//     let conf = confirm("Хотите добавить пункт?");
//     if (!conf) break;
//     let dataWork = prompt("Какой пункт хотите добавить?");
//     work.push({
//       id: Date.now(),
//       todo: dataWork,
//       done: false,
//     });
//   }
//   return work;
// };
// console.log(workFunc(workArr));
