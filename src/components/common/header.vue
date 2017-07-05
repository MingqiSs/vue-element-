<template>
      <div class="header">
              <div class="title">后台管理系统</div>
              <div class="userinfo">
                    <el-dropdown @command="OutLogin">
                        <span class="el-dropdown-link">
                                <img src="../../static/img/img.jpg"  class="user-logo">
                               用户1
                          </span>
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item >退出</el-dropdown-item>
                        </el-dropdown-menu>
                     </el-dropdown>
              </div>
      </div>
</template>
<script>
  export default {
  methods: {
      OutLogin() {
          localStorage.removeItem('ms_username');
       this.$router.push('/login');
      }
    }
  }
</script>
</Script>
<style lang="">
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background-color: #242f42;
    }
    .header .title{
        float: left;
        width:250px;
        text-align: center;
    }
    .userinfo {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .userinfo .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }       
    .userinfo .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>