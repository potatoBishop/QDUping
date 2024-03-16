<template>
  <div id="app" style="height: 100%;">

  <el-container style="height: 100%; border: 1px solid #eee; ">
    <el-aside width="150px" > 
      <img src="./assets/QDU.jpg" alt="qdu" style="width:150px; height:40px;">
      <h3>欢迎来到QDU服务平台</h3>
      <!-- <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
      <el-button type="primary" plain>确认查询</el-button> -->
      <br> 
      <br>         
      <router-link to="/class_main">
        <el-button type="info" plain>主页</el-button>
      </router-link>
      <router-link to="/class_must">
        <el-button type="info" plain>必修</el-button>
      </router-link>
      <router-link to="/class_xcore">
        <el-button type="info" plain>选修_核心</el-button>
      </router-link>
      <router-link to="/class_ncore">
        <el-button type="info" plain>选修_非核心</el-button>
      </router-link>
      <router-link to="/class_eng">
        <el-button type="info" plain>一学分英语</el-button>
      </router-link>
      <router-link to="/class_art">
        <el-button type="info" plain>美育</el-button>
      </router-link>
      <router-link to="/class_pe">
        <el-button type="info" plain>体育</el-button>
      </router-link>
      <!-- <router-link to="/o_happy">
        <el-button type="info" plain>广告位招租</el-button>
      </router-link> -->
      <router-link to="/o_talk">
        <el-button type="info" plain>论坛</el-button>
      </router-link>

      <div class="block">
        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="250px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">广告位招租{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      
      <div id="lg">
        <!-- <button id="b_login">登录</button>
        <button id="b_regis">注册</button> -->
        <router-link to="/u_login">
          <el-button type="info" plain size="mini">登录</el-button>
        </router-link>
        <router-link to="/u_reg">
          <el-button type="info" plain size="mini">注册</el-button>
        </router-link>
      </div>
    </el-aside>

    <el-main style="height:100%; overflow:auto; padding: 0px; background: linear-gradient(#afe3d9,rgba(41, 41, 43, 50%));">
      <router-view >
        
      </router-view>
    </el-main>  
  </el-container>   
  </div>
</template>

<script>
export default {

   mounted() {
        // window.devicePixelRatio就是当前浏览器和系统缩放过后的比例，我只需要反向缩放body即可。
        document.body.style.zoom = 1 / window.devicePixelRatio;
  },
  name: 'App',
  components: {
   
  },
  data(){
    return{
      
    }
  }
}
</script>

<style>
/* #lg{
  margin-top: 250px;
} */
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
body,html{
    height: 100%;
    width:100%;
    margin:0 0 0 0;
    overflow:hidden hidden;
}
.el-button {
  width: 150px;
}

#title{
  font-size: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

a:link {   
	color: #000000;   
	text-decoration: none;   
}   

a:visited {   
	color: #000000;   
	text-decoration: none;   
}   

a:hover {   
	color: #000000;   
	text-decoration: none;   
}
 
a{
	display: inline-block;
	color: #414141;
    height: inherit;
	width: inherit;	
	text-decoration: none;
}
</style>
