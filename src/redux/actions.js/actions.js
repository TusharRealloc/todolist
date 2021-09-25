
export const addItem=(data)=>{
    return{
        type:'ADDITEM',
        payload:data
    }
}

export const editItem=(data)=>{
    return{
        type:'EDITITEM',
        payload:data

    }
}

export const deleteItem=(data)=>{
    return{
        type:'DELETEITEM',
        payload:data

    }
}

export const doneItem=(data)=>{
    return{
        type:'DONEITEM',
        payload:data
    }
}