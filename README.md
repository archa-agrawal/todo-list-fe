# TODO List

## Requirements
1. User should be able to add todo's.
2. User should be able to get list of todo's.
3. User should be able to check(mark finished) todo items.
4. User should be able to delete todo items.

## API


### Todo element Structure:
```
{
    id: String,
    message: String,
    checked: Boolean
}
```

### API Details


server : localhost:3000

api base path: /api

- get list of todos : 
 
    ```
    method: GET 
    path: /todos
    returns: array of todo elements  
    ```
- create a new todo: 
    ```
    method: POST
    path: /todo
    body: {
        message: String
    }
    returns: newly created todo element
    ``` 
- Get one todo element:
    ```
    method: GET
    path: /todo/:id
    returns: one todo element with given id
    ```
- Toggle checked value of a todo:
    ```
    method: PUT
    path: /todo/:id/toggle
    returns: edited todo element
    ```
- Delete a todo element:
    ```
    method: DELETE
    path: /todo/:id
    returns: true if element was successfully deleted, otherwise false
    ```

## Rules
- create repo on github
- never code on main branch
- every ticket should have its own branch
    ```
    To switch branch 
    git fetch
    get checkout <branch name>
    ```
- raise pull request once the change is done
- once code review approved, merge, do next ticket

### Code quality rules
- Try to use classes, modules, errors and promises
- Try to write reusable methods
- Tab properly
