// import Axios from 'axios'
import * as API from '../../API/api.js'
export default {
  name: 'TopBar',
  data () {
    return {
      msg: '我的网站',
      activeIndex: '1'
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
  }
  // methods () {

  // }
}
