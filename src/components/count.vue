<!--  -->
<template>
  <div>
      {{msg}}
      <h2>{{$store.state.count}}</h2>
      <!-- 最原始的写法 -->

      <!-- <h2>{{count}}</h2> -->
      <!-- '这么写的话必须引入mapstate 然后用计算属性 么有引入的话就用上面一行的代码-->

      <h2>模块组:{{$store.state.a.count}}==={{count}}</h2>
         <!-- 如果使用模块组的话 在么有使用computed计算count的话那么这边就要使用{{$store.state.a.count}}访问count 
         要使用{{count}}直接访问 那么需要再computed里面加上 count（）{return this.$store.state.a.count} -->

      <button @click="$store.commit('add')">+</button>
      <button  @click="$store.commit('remove')">-</button>
      <button @click="$store.commit('addSome',10)">+10</button>
     
      <!-- 传参的写法 -->
      <p>用mapMutations后的调用方法写法</p>
      <button @click="add">+</button>
       <button @click="remove">-</button>
        <button @click="addSome(10)">+10</button>
        <p>使用actions的方法</p>
        <button @click="add">+</button>
       <button @click="remove">-</button>
        <button @click="addSome(20)">+10</button>
  </div>
</template>

<script>
import store from '@/vuex/store';
import {mapState,mapMutations,mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
        msg:'aaa'
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
  // computed:mapState(['count']),使用mapstate来获取store中的state中的count 这个方法比较简单推荐使用
  methods:mapMutations(['add','remove','addSome']),

  store
}

</script>
<style scoped>
</style>