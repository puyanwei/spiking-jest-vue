<template lang="html">
  <ul>
    <li v-for="message in messages">{{ message }}</li>
  </ul>
</template>

<script>
export default {
  name: "list",
  props: ["messages"]
};
</script>

<style lang="css">
</style>
