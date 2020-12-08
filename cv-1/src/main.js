let demo = document.querySelector("#demo");
let string = `
大家好我是大帅B
接下来开始做个八卦
先试一下能不能加样式
body{
  color: red;
}
`;
let n = 0;
let b = "";
demo.innerHTML = b;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n"){
      b += "<br>";
    } else{
      b += string[n];
    }
    n++;
    if(n < string.length+1){
    demo.innerHTML = b;
    step();
    }
  }, 100);
};
step();