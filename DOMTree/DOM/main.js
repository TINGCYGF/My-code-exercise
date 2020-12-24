
// const div = dom.create("<div>newDiv</div>");
// console.log(div);
//测试api

let ting = document.querySelector('#ting');
console.log(ting);

dom.attr(ting, 'title', 'hi,I an Ting');
console.log(dom.attr(ting, 'title'));

dom.text(ting, '添加文本内容');

dom.style(ting, {backgroundColor:'red', border: '1px solid red'});

dom.class.add(ting, 'red');
dom.class.add(ting, 'box');
dom.class.remove(ting, 'box');
console.log(dom.class.has(ting, 'red'));

const fn = () =>{
  console.log('点击');
};
dom.on(ting, 'click', fn);
dom.off(ting, 'click, fn');

const box = dom.find('#box1')[0];
console.log(box);

let box3 = document.querySelector('#box3');
console.log(box3);

dom.each(box3, (n)=> dom.style(n, 'color', 'red'));

console.log(dom.children(box3)[0]);
console.log(dom.index(box3));