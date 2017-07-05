<template>
    <div class="login-wrap">
        <div class="login-box">
            <div class="login-title">
                <h3>项目名称</h3>
                <p>登录</p>
            </div>
                    <div class="login-form">
                            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="50px">
                                <el-form-item label="账号" prop="username">
                                    <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
                                </el-form-item>
                                <el-form-item label="密码"  prop="password">
                                    <el-input type="password" v-model="ruleForm.password"  placeholder="请输入密码"></el-input>
                                </el-form-item>
                                <el-form-item>
                             <el-button type="primary" style="width:100%" @click="submitLogin('ruleForm')">登录</el-button>
                            </el-form-item>
                            </el-form>
                    </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitLogin(ruleForm) {
                const self = this;
                self.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',self.ruleForm.username);
                        self.$router.push('/usermanag');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style>
 .login-wrap{
  background-color: #f7f7f7;
    padding-top: 50px;
    min-height: 100vh;
 }
.login-box {
    margin: 0 auto;
    max-width: 400px;
    border-radius: 5px;
    background-color: #fff;
}
.login-title {
    color: #2a323c;
    text-align: center;
    padding: 20px 0 0;
}
.login-title h3{
    margin: 0 0 30px;
}
.login-title p{
    font-weight: 700;
    color: #898989;
    margin: 0;
}
.login-form {
    padding: 20px 30px;
    border: 0;
}

</style>