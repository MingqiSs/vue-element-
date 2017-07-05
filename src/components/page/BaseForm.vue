<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>用户编辑</el-breadcrumb-item>
                <el-breadcrumb-item>新增用户</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                   <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="日期">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="性别">
                       <el-radio-group v-model="form.sex">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="2">女</el-radio>
                    </el-radio-group>
                </el-form-item>
               <el-form-item>
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                       :file-list="form.fileList"
                        list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
               </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    const ERR_OK=200
    export default {
        data: function(){
            return {
                form: {
                     //name: '1',
                    // address:"2",
                    // date:"2",
                    // sex:1,
                  // fileList
                },   
                fileList:[],          
            }
        },
      created(){   
             if(this.$route.query.userId)
             {
                // axios.get('http://120.24.176.74:1212/api/UserInfo')  
                //         .then(res=>{
                //             if (res.status === ERR_OK) { 
                //               this.form=res.data[0]
                //              this.form.fileList=[{name: 'user.jpeg', url: 'http://7xlcvw.com2.z0.glb.qiniucdn.com/WeChatChest/201704211026270039121.jpg'}]
                //             }
                //         })
               let users=JSON.parse(localStorage.getItem("users"))
                  users.forEach(function(element) {
                 if(element.Id==this.$route.query.userId)
                 {
                   this.form=element
                   return;
                 }
                  }, this);
              
             }       
         
        },
        methods: {
            onSubmit() {    
                this.$message.success('提交成功！');
            }
        }
    }
</script>