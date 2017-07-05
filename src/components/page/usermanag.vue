<template>   
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
       <el-table-column
      label="性别"
      width="180">
          <template scope="scope">
        <span style="margin-left: 10px" v-if="scope.row.sex==1">男</span>
         <span style="margin-left: 10px" v-else>女</span>
      </template>
    </el-table-column>
    <el-table-column
      label="头像"
      width="180">
          <template scope="scope">
        <img :src="scope.row.userImg" style="height:20px">
      </template>
    </el-table-column>    
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑 </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
   import axios from 'axios'
   import  getuser from '../../static/js/mock.js'
    const ERR_OK = 200
  export default {
    data() {
      return {
        tableData: []
      }
    },
    created(){
       getuser(100)
        this.tableData=JSON.parse(localStorage.getItem("users"))
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
         this.$router.push({ path: '/BaseForm', query: { userId: this.tableData[index].Id }})
      },
      handleDelete(index, row) {
        this.tableData.splice(index,1)
        this.$message('删除成功');
      }
    }
  }

</script>