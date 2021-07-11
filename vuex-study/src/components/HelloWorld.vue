<!-- -->

<script>
export default {
  name: 'HelloWorld',
  props: {
    tag: String,
  },
  data (){
    return {
      people: ['哈默','晓霞','贤斌']
    }
  },
  render(createElement, context) {
    return createElement(this.tag,{},this.people.map(
        name => createElement('li',{attrs:{class: 'test'},on: {
          click: () => {console.log('li clicked')}
          }},`${name}`)
    ))
  }
}
</script>
