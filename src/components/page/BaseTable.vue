   <template>
     <div>
       <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
                <el-breadcrumb-item>基础表格</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
          <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
          <div class="page_wrapper">
              <el-pagination
      layout="prev, pager, next"
        @current-change="pageChange"
      :total="50">
    </el-pagination>
          </div>
       </div>
  </template> 
  <script>
    import axios from 'axios'
    let ERR_OK=200
   export default {
    data() {
      return {
        tableData: []
      }
    },
    created(){
      this.getData()
    },
    methods: {
        getData(index){
               axios.post("/api/tabledata",{pageindex:index}).then(res=>{
                            if (res.status === ERR_OK) { 
                              this.tableData=res.data.data
                              console.log(res.data.data)
                            }
                        }) 
        },
        pageChange(val){
          this.getData(val)
        }
    }
  }
  </script>
  <style>
  .page_wrapper{
  float: right
  }
  </style>