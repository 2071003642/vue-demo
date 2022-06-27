<template>
  <header class="header">

    <div class="Logo">
      <div class="logoleft">LOGO </div>
      <div class="logodot">.</div>
      <div class="logoright"> Control Panel Title</div>
    </div>
    <ul class="nav">
      <el-menu mode="horizontal" default-active="3"> 
        <el-menu-item index="1">Resources</el-menu-item>
        <el-menu-item index="2"> Tickets</el-menu-item>
        <el-menu-item index="3">Forum</el-menu-item>
        <el-menu-item index="4">FAQ</el-menu-item>
      </el-menu>
    </ul>

    <div class="person">
    
      <el-dropdown>
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
        <span class="el-dropdown-link">
          下拉菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//::v-deep 属性选择器钩子
.header{
  display: flex;
  width: 1440px;
  margin: 0 auto;
  background: #1890ff;
  height:54px;
  //使某个元素在右边的父元素设置1
   display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    flex-wrap: wrap;//允许换行
  }
.nav{
  margin: 0 auto;
  .el-menu{
    background: none;
    .el-menu-item{
      font-size: 18px;
    }
    .is-active{
      background: rgba(255,255,255,0.3);//默认被选择的  

    }
  }
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover{//hover
    background: rgba(255,255,255,0.3);
  }  
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus{//focus
    background: rgba(255,255,255,0.3);
  }
  .el-menu--horizontal>.el-menu-item.is-active{//字体颜色
      color:white;
    }
  .el-menu--horizontal>.el-menu-item {//isactive后的字体颜色
    color:white;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{//hover字体颜色
    color:rgba(255,255,255,0.5)
  }
}
.person{
  //使某个元素在右边的父元素设置2
 margin-left: auto;

}
.Logo{
  display: flex;
    .logoleft{
    text-align: center;
    height: 54px;
    line-height: 54px;
    color: white;
    margin-left: 20px;
    font-size: 29px;
  }
  .logoright{
    text-align: center;
    height: 54px;
    line-height: 54px;
    color: white;
    margin-left: 20px;
    font-size: 14px;
  }
  .logodot{
    text-align: center;
    color: white;
    margin-left: 20px;
    margin-top: 14px;
  }
}

</style>
