<template>
<div>
  <h1>{{counter}}</h1>
  <button @click="addOne">add one</button>
</div>
</template>

<script>
// Vue 3 Version of a Counter
import { ref } from "vue";
export default {
    name: "Counter",
    //using new composition api
    setup(){
        const counter = ref(0)
        const addOne = () => {counter.value = counter.value + 1}
        return { counter, addOne  }
    }
}
</script>

<style>
 h1 {color: red;}
</style>