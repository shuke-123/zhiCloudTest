<!--  -->
<template>
  <div id="app">
   <el-container>
  <el-aside width="200px">
  
    <left-nav></left-nav>
  </el-aside>
  <el-container>
    <el-header>
      {{msgw2}}
      <top-nav :fromfather="msg" @getmsg="getmessags"></top-nav>
    </el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import leftNav from '../components/leftNav'
import topNav from '../components/topNav'
export default {
  data () {
    return {
     msg:'我是父组件的值',
     msgw2:''
    //  接受子组件过来的值、
    };
  },
  components:{leftNav,topNav},
  methods:{
    getmessags(res){
      this.msgw2=res;
    }
  },
  


}

</script>
<style >

/*css重置*/
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
form,fieldset,input,textarea,p,blockquote,th,td,img { padding: 0; margin: 0; }
fieldset,img { border: 0; }
address,caption,cite,code,dfn,em,strong,th,var,i { font-weight: normal; font-style: normal; }
ol,ul,li { list-style: none; }
caption,th { text-align: left; }
q:before,q:after { content:''; }
abbr,acronym { border: 0; }
ul{margin-bottom:0!important;list-style: none;padding:0;}
a:link{text-decoration:none;}
a:visited{text-decoration:none;}
a:hover{text-decoration:none;color:#fff;}
a:active{text-decoration:none;}
input[type="button"], input[type="submit"], input[type="reset"] ,input[type="text"],input[type="tel"],input[type="password"],textarea,button{
    -webkit-appearance: none;
    outline: none;
}
[readonly="readonly"] {
    pointer-events: none;
}

body,html{height:100%;}
body{margin:0;}
#app,.el-container{height:100%;}
/* element-ui */
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    /* line-height: 60px; */
  }
  
  .el-aside {
    background-color: #313139;
    color: #fff;
    text-align: center;

  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }
  
  /* body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
  .el-submenu__title i {color:#fff;}

</style>