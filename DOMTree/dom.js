window.dom = {
  create(string){
    //用trmolate元素作为容器
    const container = document.createElement("template");
    //trim去除空格
    container.innerHTML = string.trim();
    //content.firstChild才能获取第一个子元素
    return container.content.firstChild;
  },
  //创建插入下一个节点API
  after(node, node2){
    //插入node下一个节点的前面
    node.parenNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2){
    node.parentNode.inserBefor(node2, node);
  },
  append(parent, node){
    parent.appendChild(node);
  },
  //增加一个父元素
  wrap(node, parent){
    dom.before(node, parent);
    dom.append(parent, node);
  },
  remove(node){
    noed.parentNode.removeChild(node);
    return node;
  },
  //删除所有
  empty(node){
    const {childNodes} = node;
    const array = [];
    let x = node.firstChild
    while (x){
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
  }
}




