import Vue from "vue";
import YuMessage from "./YuMessage";

// signleton

let instance;

const getInstance = () => {
  instance = new Vue({
    render: (h) => h(YuMessage),
  }).$mount();
};

const Message = {
  success(options) {
    // console.log(instance);
    //保证是单例
    !instance && getInstance();
    // //append to body
    document.body.appendChild(instance.$el);
    let messageInstance = instance.$children[0];
    messageInstance.add({ ...options, type: "success" });
  },
  info() {},
  fail() {},
  //   ...
};

export { Message };

export default {
  install(_Vue) {
    // console.log(_Vue);
    // ƒ Vue (options) {
    //     if ( true &&
    //       !(this instanceof Vue)
    //     ) {
    //       warn('Vue is a constructor and should be called with the `new` keyword');
    //     }
    //     this._init(options);
    //   }
    // 里面主要做三件事
    //1 注册全局组件
    //使用新对象使用拷贝的方式 避免影响原来的对象
    let $message = {};
    Object.keys(Message).forEach((key) => {
      $message[key] = Message[key];
    });
    //2 注册全局指令
    //3 往原型上添加属性和方法
    Vue.prototype.$message = $message;
  },
};
