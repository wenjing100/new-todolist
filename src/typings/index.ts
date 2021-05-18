interface ITodo {
    id:number;
    content:string;
    status:TODO_STATUS;
}

interface Istate {
    list:ITodo[]   //list是  内容符合ITODO  的数组
}

//枚举广泛用在 系列里面有固定的值时
enum TODO_STATUS {
    FINISHED ='finished',
    DOING = 'doing',
    GOINGTODO = 'goingtodo'
}

export {
    ITodo,
    Istate,
    TODO_STATUS
}