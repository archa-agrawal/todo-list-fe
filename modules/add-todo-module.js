
import {addTodo} from './todo-module.js'
import printList from './main-list-module.js';

const newAddition = async () => {
  const userInput = document.getElementById("addbox").value

  try{
    const response = await addTodo(userInput);
    if(response.ok){
      return printList()
    }
    throw Error()
  }catch(e){
    console.log('error')
  }
}


export default newAddition;