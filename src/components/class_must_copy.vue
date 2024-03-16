<template>
    <div>
        <div id="main_content">
            <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                <h3>测试必修课</h3>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
                <el-button type="primary" plain>确认查询</el-button>
                <li id="content_class" v-for="i in count" class="infinite-list-item" v-bind:key= i >
                  {{ i }}
                  
                  <hr>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input2:'',
      count:0
    }
  },
  methods: {
      onSubmit() {
        console.log('submit!');
      },
      load () {
        this.count += 5
      }
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