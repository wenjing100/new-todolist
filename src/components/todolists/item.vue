<template>
    <div class="item">
      <div class="text">
        <input type="checkbox"
        :checked="item.status === FINISHED"
        @click="setStatus(item.id)"
      />
      <span
       :class="item.status === FINISHED ?'line-cross':''"
      >
        {{item.content}}
      </span>
      </div>
      
      <div class="buttons">
        <button
          @click="removeTodo(item.id)"
          >删除</button>
        <button
          v-if="item.status !== FINISHED"
          @click="setDoing(item.id)"
          :class="item.status === DOING?'doing':'willdo'"
        >
          {{item.status === DOING?'正在执行...':'马上做'}}
        </button>
      </div>
      
    </div>
</template>

<script lang='ts'>
import { defineComponent, PropType} from 'vue'
import { ITodo,TODO_STATUS } from '../../typings'

interface IstateList {
  FINISHED:TODO_STATUS;
  DOING:TODO_STATUS;
  GOINGTODO:TODO_STATUS
}
  export default defineComponent({
      name: 'todoitem',
      props:{
        item: Object as PropType<ITodo>
      },
      setup(props,{ emit }){
        const statusList:IstateList = {
          FINISHED:TODO_STATUS.FINISHED,
          DOING:TODO_STATUS.DOING,
          GOINGTODO:TODO_STATUS.GOINGTODO
        }

        const setStatus = (id:number):void=>{
          emit('setStatus',id)
        }
        const removeTodo = (id:number):void=>{
          emit('removeTodo',id)
        }
        const setDoing = (id:number):void=>{
          emit('setDoing',id)
        }

        return {
          ...statusList,
          setDoing,
          removeTodo,
          setStatus
        }
      }
  })
</script>

<style lang='scss' scoped>
.item{
  min-width: 200px;
  display: flex;
  justify-content:space-between;
  
  span{
    justify-self:left;
    align-self: flex-start;
    text-align: left;
  }
  .buttons{
    width: 150px;
    display: flex;
    justify-content: space-between;
  }
}
.line-cross{
  text-decoration: line-through;
  color:gray;
}
.doing{
  background: #ededed;
  color: #5e5c5c;
}
.willdo{
  background: orange;
  color: white;
}
</style>