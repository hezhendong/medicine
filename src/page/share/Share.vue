
<template>
  <div class="mobiledetail">
    <div class="submit-btn">
      <!-- <p>注册成功后请用该手机号直接登录</p> -->
      <div class="btn-success" @click="share_doctor">进入补君堂</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions,mapMutations } from 'vuex'
import {Toast} from 'mint-ui'
export default {
  name: 'mobiledetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      share_phone:'',
      num:60,
      phone_reg:/^1[3|4|5|7|8][0-9]\d{4,8}$/
    }
  },
  mounted () {
    this.share_footer_hide()
  },
  created () {

  },
  methods : {
    ...mapActions([
        'checkout'
      ]),
    ...mapMutations([
        'storeDoctorName'
      ]),
    share_footer_hide:function(){
      document.getElementById('footer').style.zIndex='-10000000'
      // document.title='补君堂APP'
    },
    share_doctor:function(){
      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        var loadDateTime = new Date();
        window.setTimeout(function() {
         var timeOutDateTime = new Date();
         if (timeOutDateTime - loadDateTime < 5000) {
          window.location.href= "http://www.baidu.com";
         } else {
          window.close();
         }
        },
        25);
        window.location = "http://www.baidu.com";
       } else if (navigator.userAgent.match(/android/i)) {
        var state = null;
        try {
         state = window.open("medicine://aa.bb", '_blank');
        } catch(e) {}
        if (state) {
         window.close();
        } else {
         window.location.href = "http://www.baidu.com";
        }
       }
    }
  },
  components: { 
    // 'v-scroll':Scroll
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.mobiledetail
  width 100%
  height 100%
  z-index 10
  background #fff
  overflow hidden
  overflow-y auto
  position relative
  background-image url('../../../static/share.png') 
  background-size 95% 95%
  background-repeat no-repeat
  background-position center center
  position relative
  .btn-success
    position absolute
    bottom 1.5rem
    width 4.266667rem
    height 0.88rem
    background #607d8b
    color #fff
    text-align center
    line-height 0.88rem
    border-radius 0.88rem
    left 2.899rem
</style>
