<template>
    <div style="border: 3px solid #384732;  background:rgb(255, 255, 255);">
        <el-container >
            <br>
            <el-header style="text-align: left;">
                <!-- <h4>课程名称</h4> -->
                <!-- <h5>授课教师</h5> -->
                <el-button type='info' @click="goclick()">数据结构</el-button>
                <el-button type='info' @click="goclick()">苏倩倩</el-button>
            </el-header>
            <el-container>
                <el-aside style="text-align: left;">
                <div style="float:left; margin-left:40px; " >
                    <div>课序号:{{class_id}}cxk2221212</div>
                    <div>课程号:{{class_xid}}2</div>
                    <div>性质:{{class_kind}}课程类型喵</div>
                    <br>
                    <el-rate
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template=value>
                    </el-rate>
                </div>
                </el-aside>
                <el-main style="text-align: left; padding: 10px;">
                    课程评价：
                    <!-- <textarea name="" id="text" cols="100" rows="3" readonly="readonly">评论内容...</textarea> -->
                    <p style="background:rgb(192, 192, 192); border-radius: 5px; padding: 10px;">{{class_detail}}课程详细评价喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵......</p>
                </el-main>
            </el-container>
            
        </el-container>
    </div>
</template>

<script>
export default {
 data(){
    return{
        class_id:"cc20221215",
        class_xid:2,
        class_kind:"课程类型喵",
        class_detail:"课程详细评价喵",
        value: 3.7,
    }
 },
 methods:{
    goclick(){
        window.open('http://www.baidu.com','_blank');
    },
 }


}
</script>



<style scoped>

</style>

