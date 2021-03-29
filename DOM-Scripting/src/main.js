
function showPic(whichpic){
  if(!document.getElementById("placeholder")){return false;}
  const source = whichpic.getAttribute("href");
  const placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  if(document.getElementById("description")){
    const text = whichpic.getAttribute("title");
    const description = document.getElementById("description");
    description.firstChild.nodeValue=text;
  }
  return true;
}
function prepareGallery(){
  if(!document.getElementById){
    return false;}
  if(!document.getElementsByTagName){
    return false;}
  if(!document.getElementById("imagegallery")){
    return false;}
  const gallery = document.getElementById("imagegallery");
  const links = gallery.getElementsByTagName("a");
  for(let i=0; i<links.length; i++){
    links[i].onclick=function(){
      return!showPic(this);//或使用三元操作符：return showPic(this)?false:true;
    }
  }
}
//以下为 addLoadEvent函数代码，共享onload事件
function addLoadEvent(func){
  const oldOnload = window.onload;
  if(typeof window.onload!='function'){
    window.onload=func;
  }else{
    window.onload=function(){
      oldOnload();
      func();
    }
  }
}
addLoadEvent(prepareGallery);