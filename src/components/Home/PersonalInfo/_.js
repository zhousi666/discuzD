// import Axios from 'axios'
import {data} from './config'

export default {
  name: 'PersonalInfo',
  props: {
    active: Number
  },
  data () {
    return {
      msg: 'PersonalInfo',
      data

    }
  },
  methods: {
    scroll (index) {
      this.$emit('scroll', index)
    }
  }
}
