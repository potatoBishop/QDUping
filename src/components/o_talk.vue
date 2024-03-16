<template>
  <div>
      <h2>论坛版块</h2>
      <p>正在建设中</p>
      <div class="block">
        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="150px" >
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <br>
      <br>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="校内帖子" name="first">
          <div style="border: 3px solid #384732; border-radius: 10px;  background:rgb(255, 255, 255);">
          <el-container >
            <br>
            <el-header style="text-align:left; ">
              <img src="../assets/mqm.jpg" alt="mqm" style="width:40px; height:40px; display:inline;">
              <div style="display:inline;">测试用户</div>
              <h3>这个帖子的标题：食堂的面条怎么样？</h3>
              <br>
            </el-header>
            <el-main style="text-align: left; padding: 10px;">
                <p style="background:rgb(192, 192, 192); border-radius: 5px; padding: 10px;">{{tie_detail}}帖子详细内容喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵......</p>
            </el-main>
          </el-container>
    </div>
    
    <div style="border: 3px solid #384732; border-radius: 10px;  background:rgb(255, 255, 255);">
          <el-container >
            <br>
            <el-header style="text-align:left; ">
              <img src="../assets/mqm.jpg" alt="mqm" style="width:40px; height:40px; display:inline;">
              <div style="display:inline;">测试用户</div>
              <h3>这个帖子的标题：食堂的面条怎么样？</h3>
              <br>
            </el-header>
            <el-main style="text-align: left; padding: 10px;">
                <p style="background:rgb(192, 192, 192); border-radius: 5px; padding: 10px;">{{tie_detail}}帖子详细内容喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵......</p>
            </el-main>
          </el-container>
    </div>
        </el-tab-pane>
        <el-tab-pane label="二手交易" name="second">二手交易</el-tab-pane>
        <el-tab-pane label="脱单区" name="third">脱单区</el-tab-pane>
        <el-tab-pane label="期末资料" name="fourth">期末资料</el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import o_tie from './o_tie.vue';


export default {
  components: { o_tie },
    data() {
      return {
        activeName: 'first',
        tie_detail:"haha",
     
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      
     
    }
  };
</script>

<style>

</style>