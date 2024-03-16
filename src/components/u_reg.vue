<template>
    <div>
        <br>
        <div>什么？你还没有账号？速速注册一个！</div>
        <br>
        <fieldset>
            <legend>注册</legend>
            <form action="">
                <div>
                    <label>用户名:</label>
                    <input type="text" id="uid" align="right">    
                </div>
                <div>
                    <label>密码:</label>
                    <input type="text" id="ukey1" align="right">    
                </div>
                <div>
                    <label>确认密码:</label>
                    <input type="text" id="ukey2" align="right">    
                </div>
                <div>
                    <label>学号:</label>
                    <input type="text" id="hao" align="right">    
                </div>
                兴趣爱好:
                    <input type="checkbox" name="fun" value="music" />音乐
					<input type="checkbox" name="fun" value="book" />读书
					<input type="checkbox" name="fun" value="run" />跑步
					<input type="checkbox" name="fun" value="code" />编程 
                <br>
                年级:<select name="">
				    <option value="2019">2019级</option>
				    <option value="2020">2020级</option>
				    <option value="2021">2021级</option>
				    <option value="2022">2022级</option>
			    </select>
            <br>
            <br>
                <input type="submit" value="确认注册" >
            </form>
        </fieldset>
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