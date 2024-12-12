let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "#040";
  } else {
    total.innerHTML = "";
    total.style.background = "#a00d02";
  }
}
function showData() {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    table += `
    <tr>
      <td>${i + 1}</td>
      <td>${dataPro[i].title}</td>
      <td>${dataPro[i].price}</td>
      <td>${dataPro[i].taxes}</td>
      <td>${dataPro[i].ads}</td>
      <td>${dataPro[i].discount}</td>
      <td>${dataPro[i].total}</td>
      <td>${dataPro[i].category}</td>
      <td><button id="update">update</button></td>
      <td><button id="delete">delete</button></td>
      
    </tr>
    `;
  }
  document.getElementById("tbody").innerHTML = table;
}

//get total
//create product
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

showData()
submit.onclick = function () {
  let newPro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  dataPro.push(newPro);
  localStorage.setItem("product", JSON.stringify(dataPro));
  console.log(dataPro);
  cleardata();
  showData();
};
//save localstorage
//clear inputs
function cleardata() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}
//read function showData(){ let table=''; for(let i=0;i<dataPro.length;i++){ table= dataPro[i].title; console.log(table) } } document,getElementById('tbody').innerHTML=table; //read function showData() { let table=''; for(let i=0;i<dataPro.length;i++){ table+= <tr> <td>1</td> <td>samsung</td> <td></td> <td>2000</td> <td>100</td> <td>100</td> <td>100</td> <td>2100</td> <td>phone</td> <td><button id="update">update</button></td> <td><button id="delete">delete</button></td> </tr> } document.getElementById('tbody').innerHTML=table; }
//count
//delete
//apdate
//search
//clean data

//function starTwo (number) {
//let newNumber = number * 2
//console.log(newNumber)
//return newNumber
//}

// starTwo(5)

// let newNumber2 = starTwo(10)

// console.log(newNumber2)
