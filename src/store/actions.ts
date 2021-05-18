import { Istate, ITodo } from "@/typings";
import { Commit } from "vuex";
import { REMOVE_TODO, SET_TODO, SET_TODO_LIST, SET_TODO_STATUS, SET_DOING } from "./actionType";

interface ICtx {
    commit:Commit,
    state : Istate
}

export default {
    [SET_TODO]({ commit }:ICtx , todo:ITodo ): void{
        commit(SET_TODO, todo);//调用mutations
    },
    [SET_TODO_LIST]({ commit }:ICtx , todolist:ITodo []): void{
        commit(SET_TODO_LIST, todolist);
    },
    [REMOVE_TODO]({ commit }:ICtx , id:number): void{
        commit(REMOVE_TODO, id);
    },
    [SET_TODO_STATUS]({ commit }:ICtx , id:number): void{
        commit(SET_TODO_STATUS, id);
    },
    [SET_DOING]({ commit }:ICtx , id:number): void{
        commit(SET_DOING, id);
    }
}