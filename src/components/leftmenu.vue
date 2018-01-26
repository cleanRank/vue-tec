<template>
  
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link :to="'/1'">选项1</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link :to="'/2'">选项2</router-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <router-link :to="'/2'">选项3</router-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <router-link :to="'/2'">选项3</router-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <router-link :to="'/2'">选项3</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style type="text/css" lang="scss" scope="">
  @import "../style/scss/style"
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

