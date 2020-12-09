let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `
/*大家好我是大帅B
接下来开始做个八卦
先试一下能不能加样式*/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/*然后让他变为一个圆*/
#div1{
   border-radius: 50%;
   box-shadow: 0 0 3px rgba(0,0,0,0.5);
   border: none;
}
/*一边黑一边白*/
#div1{
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(2,0,36,1) 50%, rgba(0,0,0,1) 50%);
}

#div1::after{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(15,0,0,1) 25%, rgba(0,0,0,1) 50%);
}

#div1::before{
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  border: 1px soled red;
  transform: translateX(-50%);
  border-radius: 50%;
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 51%);}
}
`;

let n = 0;
let b = "";
html.innerHTML = b;


let step = () => {
  setTimeout(() => {
    //解析回车
    if (string[n] === "\n"){
      b += "<br>";
    }else if(string[n] === " "){
      b += "&nbsp";
    }else{
      b += string[n];
    }
    n++;
    if(n < string.length+1){
    html.innerHTML = b;
    style.innerHTML = string.substring(0, n);
      window.scrollTo(0,document.body.scrollHeight);
    step();
    }
  }, 1);
};
step();