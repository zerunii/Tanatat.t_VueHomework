<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  Vue.use(VueRouter)

  export default {
    name: 'IndexPage',
    methods: {
      redirectUser() { // this method is called on button click
        if (1 == 1)
        {
           this.$router.push('/HelloWorld');
        }
      }
    }
  }
</script>