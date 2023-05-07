const Reducer = (state,action)=>{
    console.log(state)
    if(action.type === 'ADD_PERSON'){
        const newPerson = [...state.persons, action.payload]
        return{
            ...state,
           persons:newPerson
        }
    }
    throw new Error('No Matcing type found')
}

export default Reducer