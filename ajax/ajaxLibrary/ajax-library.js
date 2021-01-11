//AJAX封装
ajax = (method, url, options)=>{
    const {success, fail} = options; //解构赋值
    const requset = new XMLHttpRequest()
    requset.open(method, url)
    request.onreadystatechange = () => {
      if(requset.readyState === 4){
        //成功就调用succeed， 失败就调用fail
        if(requset.readyState < 400){
          //传入响应信息
          success.call(null. request.response)
        }else if(requset.status >= 400){
          fail.call(null, request, requset.status)
        }
      }
    }
    request.send()
  }
  
  ajax('get', '/xxx', {
    success(response){},
    fail: (request, status)=>{}
  })
  
  //