<template>
  <div id="app">
    <h1>什么是RENDER函数</h1>
    <Heading tag="ul"></Heading>
    <Home></Home>
    <About></About>
    <Btn></Btn>
  </div>
</template>

<script>
import Home from '@/views/Home'
import About from '@/views/About'
import Btn from '@/views/Btn'
import Heading from '@/components/HelloWorld'

export default {
  components: {Home, About,Btn,Heading}
}
</script>
