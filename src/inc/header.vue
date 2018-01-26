<template>
<div id="mainframe" class="g-headwrap">
  <div class=" m-yktNav">
    <div class="containers">
      <div class="row">
        <div class="m-logo">
          <a hidefocus="true" target="_self" href="main.html" id="logoy">{{companyFun}}
          </a>
        </div>
        <div class="m-navrgt f-fr f-cb f-pr j-navright">
          <div class="m-nav f-cb j-navFind hidden-xs" >
            <a v-for="list in item" v-bind:class="'nitem item '+list.class" @click.stop="thod">{{text}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        flag:0,
        arry:{
          data:1
        },
        company:'ssusoft.com',
        text:'关于我们ee',
        msg:'hello world',
        item:[{
          class:'item-1',
          text:'首页'
        },{
          class:'item-2',
          text:'关于我们'
        },{
          class:'item-3',
          text:'安全保障'
        },{
          class:'item-5',
          text:'账户产品'
        },{
          class:'item-6',
          text:'解决方案'
        },{
          class:'item-7',
          text:'征信报告'
        }],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    watch:{
      'arry.data':function(){
        console.log('aa')
      }
    },
    computed:{
      changeText:function(){
        return this.text;
      },
      companyFun:function(){
        return this.company;
      }
    },
    methods:{
      thod(){
        this.text=this.text.split('').reverse().join('');
      }
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
  @import "../style/scss/header";
</style>