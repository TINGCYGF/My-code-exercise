window.jQuery = function (selectorOrArrayOrTemplate){
  let elements;
  //判断传入参数类型
  if(typeof selectorOrArrayOrTemplate === 'string'){
    if(selectorOrArrayOrTemplate[0] === '<'){
      //如果是字符串就创建div或者查找
      elements = [createElement(selectorOrArrayOrTemplate)];
    }else {
      elements = document.querySelectorAll(selectorOrArrayOrTemplate)
    }
    }else if(selectorOrArrayOrTemplate instanceof Array){
      //如果是数组直接返回数组
      elements = selectorOrArrayOrTemplate;
    }
    //创建div函数
    function createElement(string){
      const container = document.createElement("template");
      container.innerHTML = string.trim();
      return container.content.firstChild;
    }
    //api 可以操作elements
    return {
      jquery: true,
      elements: elements,
      get(index){
        return elements[index]
      },
      //插入函数
      appendTo(node){
        if(node instanceof Element){
          this.each(el => node.appendChild(el))// 遍历 elements，对每个 el 进行 node.appendChild 操作
        }else if(node.jquery === true){
          this.each(el => node.get(0).appendChild(el))//遍历 elements，对每个 el 进行 node.get(0).appendChild(el))  操作
        }
      },
      //插入函数
      append(children){
        if(children instanceof Element){
          this.get(0).appendChild(children)
        }else if(children instanceof HTMLCollection){
          for(let i=0; i<children.length; i++){
            this.get(0).appendChild(children[i])
          }
        }else if(children.jquery === true){
          children.each(node => this.get(0).appendChild(node))
        }
      },
      find(selector){
        let array = [];
        for(let i=0; i<elements.length; i++){
          const elements2 = Array.from(elements[i].querySelectorAll(selector));
          array = array.concat(elements2)
        }
      },
      each(fn){
        for(let i=0; i<elements.length;i++){
          fn.call(null, elements[i], i)
        }
        return this
      },
      parent(){
        const array = []
        this.each((node)=>{
          if(array.indexOf(node.parentNode) === -1){
            array.push(node.parentNode)
          }
        }),
        return jQuery(array)
      },
      children(){
        const array = [];
        this.each((node)=>{
          // 上课的时候这段代码是复制的，复制错了，现已改正
          array.push(...node.children)
        });
        return jQuery(array)
      },
      print(){
        console.log(elements)
      },
      // 闭包：函数访问外部的变量
      addClass(className){
        for(let i=0;i<elements.length;i++){
          const element = elements[i];
          element.classList.add(className)
        }
        return this
      },
      oldApi: selectorOrArrayOrTemplate.oldApi,
      end(){
        return this.oldApi  // this 就是新 api
      },
    }
};

window.$ = window.jQuery;