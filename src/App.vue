<template>
  <div id='container'>
      <headinput></headinput>
      <todolist
      :todolist="todolist"
      />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { Store, useStore } from 'vuex'
import headinput from './components/todoinput/index.vue'
import todolist from './components/todolists/index.vue'
import { UseTodo,IUseTodo } from './hooks'
// import { ITodo }  from './typings'

export default defineComponent({
    components:{
        todolist,
        headinput
    },
    setup(){
        const { setTodoList }:IUseTodo = UseTodo();
        const store:Store<any> = useStore();

        onMounted(()=>{
            setTodoList();
        })
        return{
            todolist:computed(()=>store.state.list)
        }
    }

})
</script>
<style lang="scss">
.container{
    min-width: 300px;
    min-height: 500px;
    background: wheat;
}
</style>
