const initialState = {
    userinfo:[]
}

const crudReducer = (state=initialState, action)=>{
    switch(action.type){
        case "insert":
            return{
                //spread state, goto userinfo inside an array spread userinfo and merge data which is in payload
                ...state,
                userinfo: [...state.userinfo, action.payload]
            }
        case "delete":
            return{
                //spread state, goto userinfo and filter out the record that does not matches with action.payload
                ...state,
                userinfo: state.userinfo.filter((item,index)=>index!== action.payload)
            }
        case "update":
            return {
                //spread state, goto userinfo apply map function match the record with action.payload.userId when matches open that item and replace that with action.payload.data 
                ...state,
                userinfo: state.userinfo.map((item, index)=>{
                    if(index === action.payload.userId){
                       return {
                        ...item,
                        ...action.payload.data
                       }
                    }
                    return item
                })
            }
        default:
            return state
    }
}

export default crudReducer



//FIREBASE -- 
//openreplay for firebase 
//query and snapshot for data fetching 
//doc for pushing in database

// let a = query(collection(db, "userinfo"))
// let info = onSnapshot

