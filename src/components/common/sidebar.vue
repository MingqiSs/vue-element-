<template>
      <div class="sidebar">
            <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" unique-opened router>
                   <el-menu-item :index="router"><i class="el-icon-setting"></i>用户管理</el-menu-item>
                    <el-menu-item :index="router1"><i class="el-icon-setting"></i>table基础功能</el-menu-item>
            </el-menu>
      </div>
</template>
<script>
  export default {
        data (){
          return {
              router:"usermanag",
                router1:"BaseTable"

          }

        },
          computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #324157;
    }
    .sidebar > ul {
        height:100%;
    }
</style>