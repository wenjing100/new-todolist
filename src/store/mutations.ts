import { Istate, ITodo, TODO_STATUS } from "@/typings";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_DOING } from "./actionType";

export default {
    [SET_TODO](state: Istate, todo: ITodo){
        state.list = [todo, ...state.list]
    },
    [SET_TODO_LIST](state: Istate, todolist: ITodo[]): void{
        //set_todo_list是用来将localstorage里面的数据读取出来的,加载的时候用
        state.list = todolist
    },
    [REMOVE_TODO](state: Istate, id:number): void{
        state.list = state.list.filter((item) => item.id !== id); 
    },
    [SET_TODO_STATUS](state: Istate, id:number): void{
        state.list = state.list.map((item:ITodo)=>{
            if(item.id === id){
                switch(item.status){
                case TODO_STATUS.FINISHED :
                    item.status = TODO_STATUS.GOINGTODO;
                    break;
                case TODO_STATUS.GOINGTODO:
                case TODO_STATUS.DOING:
                    item.status = TODO_STATUS.FINISHED;
                    break;
                default:
                    break;
            }
            }
            
            return item
        }) 
    },
    [SET_DOING](state: Istate, id:number): void{
        state.list = state.list.map((item) =>{
            if(item.id !== id){
                if(item.status === TODO_STATUS.DOING){
                    item.status = TODO_STATUS.GOINGTODO;
                }
            }else{
                item.status = item.status === TODO_STATUS.GOINGTODO
                ?TODO_STATUS.DOING
                :TODO_STATUS.GOINGTODO;
            }
            return item
        }); 
    },
}