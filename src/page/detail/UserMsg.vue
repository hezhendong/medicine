
<template>
  <div class="msg">
   <div>
     <h4>个人简介</h4>
     <p>{{user_msg}}</p>
   </div>
   <div>
     <h4>擅长疾病</h4>
     <p>{{user_ill}}</p>
   </div>
   <div>
     <h4>门诊信息</h4>
     <!-- <p v-for='list in address_detail' style="line-height:25px;">{{list}}</p> -->
    <i class="plan">
      <ol>
       <li>周一上午</li>
       <li>周一下午</li>
       <li>周二上午</li>
       <li>周二下午</li>
       <li>周三上午</li>
       <li>周三下午</li>
       <li>周四上午</li>
       <li>周四下午</li>
       <li>周五上午</li>
       <li>周五下午</li>
       <li>周六上午</li>
       <li>周六下午</li>
       <li>周天上午</li>
       <li>周天下午</li>
      </ol>
      <ul>
        <li v-for='list in address_detail'>{{list}}</li>
      </ul>
    </i>
   </div>
   <div class="doctor-detail-bottom" style="width:100%;height:3rem"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions,mapMutations } from 'vuex'
import {Toast} from 'mint-ui'
export default {
  name: 'msg',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      attention:true,
      isSelected:true,
      user_msg:"",
      user_ill:"",
      address_detail:[]
    }
  },
  mounted () {
    // console.log(this.checkout("ooo"))
    this.query_doctor_detailmsg()
  },
  created () {

  },
  methods : {
    ...mapActions([
        'checkout'
      ]),
    changeText:function(){
    	this.attention=!this.attention

    },
    query_doctor_detailmsg:function(){
      var vm =this
      var doctorId = vm.$route.query.id
      vm.doctor_id = doctorId
      this.$http.post('/traditionalChineseMedicine/doctor/queryDoctorById',{
        doctorId:doctorId
      },{emulateJSON:true}).then(function(res){
        console.log(res)
        vm.user_ill=res.body.data.specialize
        vm.user_msg=res.body.data.individualResume
        console.log(res.body.data.outpatientAddress)
        if(res.body.data.outpatientAddress){
          vm.address_detail = eval(res.body.data.outpatientAddress)
          console.log(vm.address_detail)
        }else{
          vm.address_detail = ['无门诊信息']
        }
        
      },function(e){
        console.log(e)
      })
    }
  },
  components: { 
    // 'v-scroll':Scroll
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.msg
  width 100%
  height 100%
  z-index 10
  background #fff
  overflow hidden
  overflow-y auto
  -webkit-overflow-scrolling touch

  div
    border-bottom 1px solid #f5f5f5
    padding 0.266667rem 0
    h4
      line-height 1rem
      font-size 18px
    i.plan
      display block
      width 100%
      height auto
      overflow hidden
      ol
        width 20%
        height auto
        float left
        li
          width 100%
          height 1rem
          text-align center
          line-height 1rem
      ul
        width 80%
        height auto
        float left
        li
          width 100%
          height 1rem
          text-align center
          line-height 1rem
.footer
  z-index -10
</style>
