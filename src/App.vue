<template>
  <div id="app">
    <message-list :messages="messages"></message-list>
  </div>
</template>

<script>
import MessageList from "./components/MessageList";

export default {
  name: "App",
  data: () => ({ messages: ["Hi", "S'up", "Howdy", "Hey", "Hello"] }),
  components: {
    "message-list": MessageList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
