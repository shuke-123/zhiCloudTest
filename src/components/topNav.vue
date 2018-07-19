<!--  -->
<template>
  <div >
    {{fromfather}}
    <button @click="tellfather">传值给父组件</button>
    </div>
</template>

<script>

export default {
  data () {
    return {
      tell:'我是子组件的值',
    };
  },
  props:{fromfather:String},
  methods:{
     tellfather(){
       this.$emit("getmsg",this.tell)
     }
  },
}

</script>
<style  scoped>
</style>