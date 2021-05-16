<template>
  <div id="app">
    <button @click="show">show message</button>
  </div>
</template>

<script>
import Vue from "vue";
import YUI from "./components/message";

Vue.use(YUI);

// import { Message } from "./components/message";
export default {
  methods: {
    show() {
      // console.log(Message);

      //invoke as a component
      // Message.success({
      //   message: "hell0",
      //   duration: 3000,
      // });

      //invoke as js api  this.$message
      this.$message.success({ message: "diy message " });
    },
  },
};
</script>
