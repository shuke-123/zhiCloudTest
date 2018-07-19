import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

const state={
    count:1
}
const mutations={
    add(state){
        state.count ++;
    },
    remove(state){
        state.count --;
    },
    addSome(state,some){
        state.count +=some;
    }
    // 传入参数的写法
}
const getters={
    count:state=>{
        state.count +=10;
    }
}
// getter相当于拦截器 只要count有改变 那么就会执行getters
const actions={
    addActions(context){
        context.commit('add');
        setTimeout(() => {
            context.commit("remove")
        }, 3000);
    }, 
    removeActions(commit){
        commit('remove')
    },
    addSomeActions(commit){
        commit('addSome',20)
    }
}
const moduleA={
    state,
    mutations,
    getters,
    actions
}
// action相当于异步操作

// export default new vuex.Store({
//     state,
//        mutations,
//      getters,
//        actions
// })
// 没有moudle的写法

 export default new vuex.Store({
     modules:{
         a:moduleA
     }
 })