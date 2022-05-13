const _state = {
    text:'storeText'
}
const state = (state=_state,action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "changeMsg":
            newState.text = action.value;
            break;
        case "addNum":
            console.log(newState.text+action.num)
            break;
        default:
            break;
    }
    return newState;
}
export default state