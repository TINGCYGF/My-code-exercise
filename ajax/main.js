console.log(引入main文件成功);

getCss.onclick = () =>{
  const request = new XMLHttpRequest();
  request.open('get','/style.css');
  request.onload = () => {
    console.log('成功了')
  }
  request.onerror = () => {
    consoel.log('请求失败')
  }
  request.send()
}
