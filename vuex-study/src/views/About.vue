<template>
  <div class="about">
    <h2>about页面的数字 {{$store.getters.getNum}}</h2>
    <h2>about页面的数字:: {{getNum}}</h2>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['getNum'])
  }
}
</script>
