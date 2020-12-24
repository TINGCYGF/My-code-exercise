(function () {
  var ajax = {
    getxhr: function () {
      return new XMLHttpRequest();
    },
    get: function (url, fun, sync = true) {
      // 调用对象中的方法获取xhr对象
      var xhr = this.getxhr();
      // 设置状态码改变事件
      xhr.onreadystatechange = function () {
        // 状态码为4 说明服务器返回结束 客户端接收到全部数据
        if (xhr.readyState == 4) {

          fun(xhr.responseText);
        }


      };
      xhr.open('get', url, sync);
      xhr.send();
    },

    post: function (url, post_data, sync = true, fun) {
      var xhr = this.getxhr();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          fun(xhr.responseText);
        }
      };
      xhr.open('post', url, sync);
      xhr.send(post_data);
    }
  };

  // 封装时将封装内容给window对象
  // 不要和现有window对象中的属性重名
  window.myajax = ajax;

})();