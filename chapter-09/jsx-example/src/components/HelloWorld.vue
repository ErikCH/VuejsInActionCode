<script>
export default {
  name: 'HelloWorld',
  render(h) {
    return (
      <div>
        <div class="text-center"
        on-click={this.pressed}
        domPropsInnerHTML={this.msg}></div>
      </div>
    )
  },
  data () {
    return {
      welcome: 'Hello World ',
      msg: `<h${this.header}>Hello World ${this.name}</h${this.header}>`,
    }
  },
  methods: {
    pressed() {
      alert('Clicked')
    }

  },
  props:['header', 'name']
}
</script>

<style scoped>
</style>
