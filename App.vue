<script>
export default {
  data() {
    return {
      count: 0,
      teste: "funciona",
    };
  },
};
</script>

<template>
  <button v-on:click="count + 1">Contador: {{ count }}</button>
</template>

<style>
#app {
  display: grid;
  place-content: center;
  min-height: 100vh;
}
button {
  font-size: 2rem;
}
</style>
