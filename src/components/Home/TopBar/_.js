// import Axios from 'axios'
export default {
  name: 'TopBar',
  data () {
    return {
      msg: '我的网站',
      activeIndex: '1'
    }
  },
  mounted () {
  },
  methods: {
    login () {
      console.log('sss')
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
