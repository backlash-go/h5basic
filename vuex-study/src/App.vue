<template>
  <div id="app">
    <Home></Home>
    <About></About>
    <Btn></Btn>
  </div>
</template>

<script>
import Home from '@/views/Home'
import About from '@/views/About'
import Btn from '@/views/Btn'

export default {
  components: {Home, About,Btn}
}
</script>
