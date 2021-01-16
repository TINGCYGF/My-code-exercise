import "./app1.css";

const number = document.querySelector('#number');
const addOne = document.querySelector('#addOne');
const minusOne = document.querySelector('#minusOne');
const mulTow = document.querySelector('#mulTow');
const divideTow = document.querySelector('#divideTow');
const n = localStorage.getItem("n");
number.innerText = (n || 100);

addOne.addEventListener("click", (e)=>{
  let n = parseInt(number.innerText);
   n = n + 1;
  localStorage.setItem("n", n);
  number.innerText = n;
});
minusOne.addEventListener("click", (e)=>{
  let n = parseInt(number.innerText);
  n = n - 1;
  localStorage.setItem("n", n);
  number.innerText = n;
});
mulTow.addEventListener("click", (e)=>{
  let n = parseInt(number.innerText);
  n = n * 2;
  localStorage.setItem("n", n);
  number.innerText = n;
});
divideTow.addEventListener("click", (e)=>{
  let n = parseInt(number.innerText);
  n = n / 2;
  localStorage.setItem("n", n);
  number.innerText = n;
});
