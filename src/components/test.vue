<!-- 
 -->
<template>
  <div>
       <h2>{{msg}}</h2>
       <h2>{{count}}</h2>
  </div>
</template>

<script>
import store from '@/vuex/store';
export default {
  data () {
    return {
        msg:'asssdkhk'
    };
  },
   computed:{
      // ...mapState(['count']),
    //   三个点表示拓展
    //  count(){
    //     return this.$store.getters.count;
    //  }
    // //  不简写的geeters
    // ...mapGetters(["count"])
    // ...mapActions(['addActions','removeActions','addSomeActions'])
    // 模板获取
    count(){
      return this.$store.state.a.count
    }

  },

  store

}

</script>
<style  scoped>
</style>