<template>
  <div>
    <HeaderNav></HeaderNav>
  </div>  
</template>
<script>
import HeaderNav from '@/components/HeaderNav'

export default {
  name: "HelloWorld",
  components:{//注册组件
    HeaderNav,
  },
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
