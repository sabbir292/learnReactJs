
const reducer = (state,action)=>{
  

    if(action.type === 'ADD_PEOPLE'){
      const newPeople = [...state.newperson, action.payload]
      return{
        ...state,
        newperson:newPeople,
        isShowModal: true,
        modalContent: 'Person Added successfully'
      }
    }
    if(action.type ==="EMPTY_VALUE"){
      return{
        ...state,
        isShowModal:true,
        modalContent: "Please Add Valid Data"
        
      }
    }
    if(action.type ==="CLOSE_MODAL"){
      return{...state, isShowModal: false}
    }
    if(action.type === 'REMOVE_PERSON'){
      const updatedPersons = state.newperson.filter((item)=>item.id!== action.payload)
      console.log(updatedPersons)
      return{
        ...state,
        newperson: updatedPersons,
        isShowModal: true,
        modalContent: 'person removed successfully'
      }
    }
    
  
    throw new Error ('No matching action type')
  }

  export default reducer