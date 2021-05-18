<template>
    <div>
      <todoitem
        v-for="item of todolist"
        :key="item.id"
        :item='item'
        @removeTodo="removeTodo"
        @setStatus="setStatus"
        @setDoing="setDoing"
      />
    </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import todoitem from './item.vue'
import { ITodo } from '../../typings'
import { IUseTodo, UseTodo } from '../../hooks'

  export default defineComponent({
      name: 'mainlist',
      props:{
        todolist:Array as PropType<ITodo[]>
      },
      components:{
        todoitem
      },
      setup(){
        const {
          removeTodo,
          setStatus,
          setDoing
        }:IUseTodo = UseTodo();

        return{
          removeTodo,
          setStatus,
          setDoing
        }
      }
  })
</script>

<style lang='scss' scoped>

</style>