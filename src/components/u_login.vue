<template>
    <div>
        <fieldset>
            <legend>大学生一站式服务网站登录页面</legend>
            <form action="">
                <div>
                    <label>用户名:</label>
                    <input type="text" id="uid" align="right">    
                </div>
                <div>
                    <label>密码:</label>
                    <input type="text" id="ukey1" align="right">    
                </div>
                <div style="width:300px; margin:0 auto; ">
                    <el-link type="primary" style="float：left; width:70px; display:inline;">忘记密码</el-link>
                    <el-link type="primary" style="float: right; width:70px; display:inline;">找回密码</el-link>
                </div>
                
                <input type="submit" value="登录">
            </form>
        </fieldset>
        <br>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>
label{

 width: 150px;

     display: inline-block;

     text-align: right;

}
</style>