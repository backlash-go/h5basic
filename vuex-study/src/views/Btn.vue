<template>
  <div>
    <button @click="addFn">点击加1</button>
    <button @click="$store.dispatch('decreaseAsync')">点击减1</button>
    <button @click="increase(2)">点击加1</button>
    <button @click="decreaseAsync()">点击减1</button>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
  name: "Btn",
  methods: {
    addFn(){
      this.$store.commit('increase',2)
    },
    ...mapMutations(['increase']),
    ...mapActions(['decreaseAsync'])
  }
}
</script>

