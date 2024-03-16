<template>
        <div id="main_content">
            <ul class="infinite-list" v-infinite-scroll="load" style="overflow:hidden; margin:0px; padding:0px; height:100%" >
                <li id="content_class" v-for="i in count" class="infinite-list-item" v-bind:key= i  >
                  <eva></eva>
                </li>
            </ul>
        </div>
    
</template>

<script>
import eva from './class_eva.vue'

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
        this.count += 4;
      },
      goclick(row,column,event,cell) {
        console.log(row,column,event,cell);
        window.open('http://www.baidu.com','_blank');
      },
  },
  components:{
    eva
  }

}
</script>

<style>



ul{
    list-style-type: none;
    height: 1250px;
    /* padding: 10px; */
}

</style>