
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_DOING } from "@/store/actionType"
import { ITodo, TODO_STATUS } from "@/typings"
import { watch } from "vue";
import { Store, useStore } from "vuex"

export interface IUseTodo {
    setTodo: (value:string)=> void;
    setTodoList: ()=> void;
    removeTodo: (id:number)=> void;
    setStatus: (id:number)=> void;
    setDoing: (id:number)=> void;
  }

interface IsetLocalStorage {
    getLocalList: ()=> ITodo[]
    setLocalList: (listItem:ITodo[])=> void
}

function UseTodo ():IUseTodo{

    const store: Store<any> = useStore(); //要使用state  必须导入并使用useStore
    const { setLocalList,getLocalList } :IsetLocalStorage = setLocalStorage();
    const todolist:ITodo []= getLocalList();

    watch(()=>{
        return store.state.list
    },(todolist)=>{
        setLocalList(todolist);
    })

    function setTodo(value:string):void{
        const todo: ITodo = {
            id: new Date().getTime(),
            content:value,
            status:TODO_STATUS.GOINGTODO
        }

        store.dispatch(SET_TODO,todo);
        
    }

    function setTodoList(){
        store.dispatch(SET_TODO_LIST,todolist)
    }

    function removeTodo(id:number):void {
        store.dispatch(REMOVE_TODO,id);
    }

    function setStatus(id:number):void {
        store.dispatch(SET_TODO_STATUS,id);
    }

    function setDoing(id:number):void {
        store.dispatch(SET_DOING,id);
    }

    return {
      setTodo,
      setTodoList,
      removeTodo,
      setStatus,
      setDoing
    }
}

function setLocalStorage():IsetLocalStorage {
    
    function getLocalList() :ITodo[]{
        return JSON.parse(localStorage.getItem('listItem') || '[]')
    }
   
    function setLocalList(listItem:ITodo[]){
        localStorage.setItem('listItem',JSON.stringify(listItem))
    }

    return{
      getLocalList,
      setLocalList
    }
}

export {
    UseTodo,
    setLocalStorage
}