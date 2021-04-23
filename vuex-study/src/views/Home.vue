<template>
  <div class="home">
    <h2>home页面的数字：{{ $store.getters.getNum }}</h2>
    <h2>home页面的数字：{{ $store.getters.getNum }}</h2>
    <h2>home页面的数字:：{{ num }}</h2>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['num'])
  }
}
</script>
