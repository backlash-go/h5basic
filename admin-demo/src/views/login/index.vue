<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox v-model="loginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>

      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onLogin" :loading="loginLoading">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: "LoginIndex",
  data: function () {
    return {
      loginForm: {
        user_name: '18273041051',
        pwd: '111111',
        agree: false,
      },
      loginLoading: false,
      rules: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {pattern: /^1[3|5|7|8|]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请选择密码', trigger: 'blur'},
          {pattern: /^\d{6}$/, message: '请输入正确的验证码', trigger: 'blur'}
        ],
        //自定义验证规则
        agree: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              }
              callback(new Error('请同意用户协议'))
            },
            trigger: 'change'
          }
        ]
      },
    }
  },
  computed: {},
  methods: {
    onLogin() {
      //表单验证
      this.$refs['loginForm'].validate((valid) => {
        // 表单验证失败 valid === false
        if (!valid) {
          return
        }
        this.login()
      })
    },
    login() {
      this.loginLoading = true
      login(this.loginForm).then(res => {
        console.log(res)
        this.$message({
          message: '登陆成功',
          type: 'success'
        })
        this.loginLoading = false
      //  跳转到首页
        this.$route.push({name: 'home'})
      }).catch(err => {
        this.$message.error('登陆失败')
        this.loginLoading = false
      })
    }
  }
}
</script>

<style scoped lang="sass">
.login-container
  position: fixed
  top: 0
  right: 0
  left: 0
  bottom: 0
  margin: auto
  display: flex
  justify-content: center
  align-items: center
  background: url("../../assets/loginImage.png") no-repeat
  background-size: cover

.login-form
  padding: 40px
  width: 240px
  background-color: #FFFFFF

  .login-btn
    width: 100%


</style>