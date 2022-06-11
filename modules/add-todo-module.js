
import {addTodo} from './todo-module.js'
import printList from './main-list-module.js';

const newAddition = () => {
  const userInput = document.getElementById("addbox").value
  addTodo(userInput).then(
      (response) => {
          if(response.ok){
              return printList()
          }
          throw Error()
      }
  ).catch(() => console.log('error'));
}


export default newAddition;