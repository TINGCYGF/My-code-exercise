window.jQuery = function(selectorOrArray){
  let elements;
  if(typeof selectorOrArray === 'string'){
    elements = document.querySelectorAll(selectorOrArray);
  }else if(selectorOrArray instanceof Array){
    elements = selectorOrArray;
  }
  return {
    addClass(className){
      this.each((elements)=>{
        const element = elements;
        element.classList.add(className);
      });
      return this;
    },
    find(selector){
      let array = [];
      this.each((elements)=>{
        console.log(elements);
        array = array.concat(Array.from(elements.querySelectorAll(selector)));
        console.log(array);
      });
    return jQuery(array)
    },
    each(fn){
      for(let i=0; i<elements.length; i++){
        fn.call(null, elements[i], i);
      }
    }
  };
};
window.$ = window.jQuery;

$('#test').find('.child').addClass('red'); // 请确保这句话成功执行
