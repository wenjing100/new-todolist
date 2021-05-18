<template>
    <input type="text"
      v-model="inputvalue"
      @keyup="setinputvalue"
    />
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue';
import { IUseTodo, UseTodo }  from '../../hooks/index'

  export default defineComponent({
      name: 'headinput',
      setup(){
        const inputvalue = ref<String>('');
        const { setTodo } : IUseTodo = UseTodo();
        const setinputvalue = (e:KeyboardEvent):void=>{
          if(e.key === 'Enter' && inputvalue.value.trim() ){
            //设置值
            setTodo(<string>inputvalue.value);
            inputvalue.value = '';
          }
        }
        return{
          inputvalue,
          setinputvalue
        }
      }
  })
</script>

<style lang='scss' scoped>

</style>