const add = (data)=>{
    return {
        type:"insert",
        payload:data
    }
}

const del = (index)=>{
    return {
        type:"delete",
        payload: index
    }
}

const upd = ({userId, data})=>{
    return {
        type:"update",
        payload: { userId, data }
    }
}

export {add, del, upd}