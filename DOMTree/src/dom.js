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
    let x = node.firstChild;
    while (x){
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
  },
  //重载，如果两个参数就set，如果三个就get
  attr(node, name, value){
    if(arguments.length === 3){
      node.setAttribute(name, value)
    }else if(arguments.length === 2){
      return node.getAttribute(name)
    }
  },
  //适配，IE,添加文本
  text(node, string){
    if(arguments.length === 2){
      if('innerText' in node){
        node.innerText = string;
      }else{
        node.textContent = string;
      }
    }else if(arguments.length ===1){
      if('innerText' in node){
        return node.innerText;
      }else {
        return  node.textContent;
      }
    }
  },
  html(node, string){
    if(arguments.length === 2){
      node.innerHTML = string;
    }else if(arguments.length){
      return node.innerHTML;
    }
  },
    //添加样式
  style(node, name, value){
    // div , color , red
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      // div  查看border属性
      if (typeof name === 'string') {
        return node.style[name];
      } else if (name instanceof Object) {
        for (let key in name) {
          node.style[key] = name[key]
        }
      }
    }
  },
  //操作class属性
  class: {
    add(node, className){
      node.classList.add(className)
    },
    remove(node, className){
      node.classList.remove(className)
    },
    has(node, className){
      return node.classList.contains(className)
    }
  },
  //onclick
  on(node, eventName, fn){
    node.addEventListener(eventName, fn)
  },
  off(node, eventName, fn){
    node.removeEventListener(eventName, fn)
  },
  //获取元素数组,第二个参数指定范围
  find(selector, scope){
    return (scope || document).querySelectorAll(selector)
  },
  //查兄弟节点
  siblings(node){
    return Array.from(node.parentNode.children).filter(n=>n!==node)
  },
  parent(node){
    return node.parentNode
  },
  children(node){
    return node.children
  },
  //查下一个元素节点
  next(node){
    let x = node.nextSibling;
    while(x && x.nodeType){
      x = x.nextSibling;
    }
    return x
  },

  previous(node){
    let x = node.previousSibling;
    while(x && x.nodeType === 3){
      x = x.previousSibling
    }
    return x
  },
  //遍历所有节点
  each(nodeList, fn){
    for(let i=0;i<nodeList.length;i++){
      fn.call(null, nodeList[i])
    }
  },
  //获取排行老几
  index(node){
    const list = dom.children(node.parentNode);
    let i;
    for(i=0;i<list.length;i++){
      if(list[i] === node){
        break
      }
    }
    return i
  }


}
;




