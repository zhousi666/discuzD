// import Axios from 'axios'
import * as API from '../../API/api.js'
import {data} from './config'
import PersonalInfo from './PersonalInfo'

export default {
  name: 'Home',
  components: {
    PersonalInfo
  },
  data () {
    return {
      msg: '我的网站',
      data,
      active: 0,
      distance: 0,
      beforeDistance: 0
    }
  },
  mounted () {
    API.POST('/v1/sign_in', {
      'user_name': 'zhousi',
      'password': '123456',
      'sex': 1,
      'tel': '17621112094'
    }).then((res) => console.log('请求成功', res)).catch((error) => {
      console.log(error, 'res')
    })
  },
  methods: {
    scrollListen () {
      let cardDistance = this.$refs.cardBox.scrollTop
      if (cardDistance > this.beforeDistance) {
        if (cardDistance - this.distance > 200) {
          this.active = this.active + 1
          this.distance = cardDistance
        }
      } else {
        if (cardDistance - this.distance < 200) {
          console.log('ssssssssssssssssssss')
          this.active = this.active - 1
          this.distance = this.distance - 200
        }
      }
      this.beforeDistance = cardDistance
    },
    scroll (index) {
      this.active = index
      let topDistance = this.$refs.card[index].offsetTop
      window.scrollTo(0, topDistance)
    }
  }
}
