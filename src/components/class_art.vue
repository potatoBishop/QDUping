<template>
    <div>
        <div id="main_content">
              <h3>测试美育课</h3>
              <el-input 
                placeholder="请输入内容" 
                prefix-icon="el-icon-search" 
                v-model="input2">
              </el-input>
              <button 
                class = "plain" 
                @click="onSubmit">
                确认查询
              </button>
              <br>
              <br>
              <el-table
                :data="clazz"
                stripe
                style="width: 100%"
                @cell-click="goclick">
                <el-table-column
                  prop="xid"
                  label="课程号"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="xidd"
                  label="课序号"
                  width="90">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="课程名"
                  width="180">
                  <!-- <template slot-scope="scope">
                    <a 
                      @click="cancelDialog(scope.row)" 
                      style="color:blue;cursor:pointer">
                      {{scope.row.name}}
                    </a>
                  </template> -->
                </el-table-column>
                <el-table-column
                  prop="tman"
                  label="授课教师"
                  width="90">
                </el-table-column>
                <el-table-column
                  prop="kind"
                  label="性质"
                  width="90">
                </el-table-column>
                <el-table-column
                  prop="position"
                  label="校区"
                  width="90">
                </el-table-column>
              </el-table>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input2:'',
      clazz:[{       //对象-课程
        id:'100001',
        name:'计算机系统基础',
        xid:'ZPJ10086',
        xidd:'1',
        tman:'张培俭',
        tman_id:'1',
        kind:'必修',
        position:'浮山',
        eva_ids:[],
      },
      {       //对象-课程
        id:'100001',
        name:'计算机系统基础',
        xid:'ZPJ10086',
        xidd:'1',
        tman:'张培俭',
        tman_id:'1',
        kind:'必修',
        position:'浮山',
        eva_ids:[],
      },
      {       //对象-课程
        id:'100001',
        name:'计算机系统基础',
        xid:'ZPJ10086',
        xidd:'1',
        tman:'张培俭',
        tman_id:'1',
        kind:'必修',
        position:'浮山',
        eva_ids:[],
      },
      {       //对象-课程
        id:'100001',
        name:'计算机系统基础',
        xid:'ZPJ10086',
        xidd:'1',
        tman:'张培俭',
        tman_id:'1',
        kind:'必修',
        position:'浮山',
        eva_ids:[],
      },
      {       //对象-课程
        id:'100001',
        name:'计算机系统基础',
        xid:'ZPJ10086',
        xidd:'1',
        tman:'张培俭',
        tman_id:'1',
        kind:'必修',
        position:'浮山',
        eva_ids:[],
      },
      {       //对象-课程
        id:'100001',
        name:'计算机系统基础',
        xid:'ZPJ10086',
        xidd:'1',
        tman:'张培俭',
        tman_id:'1',
        kind:'必修',
        position:'浮山',
        eva_ids:[],
      },]
    }
  },
  methods: {
      onSubmit() {
        console.log('submit!');
      },
      goclick(row,column,event,cell) {
        console.log(row,column,event,cell);
        window.open('http://www.baidu.com','_blank');
      },
      // cancelDialog(scope){
      // },
      
  }
}
</script>


<style>


#content_class{
    height: 200px;
}
ul{
    list-style-type: none;
    height: 800px;
    padding: 10px;
}
li{
    background-color: #c6e6ddf5;
}

</style>