interface Action {
  type: string;
}

class Add implements Action {
  readonly type = "Add";
  constructor(public payload: string) {}
}

class RemoveAll implements Action {
  readonly type = "Remove All";
}

class RemoveOne implements Action {
  readonly type = "Remove One";
  constructor(public payload: number) {}
}

type TodoActions = Add | RemoveAll | RemoveOne;

interface ITodoState {
  todos: string[];
}

function todoReducer(
  action: TodoActions,
  state: ITodoState = { todos: [] }
): ITodoState {
  switch (action.type) {
    case "Add": {
      return {
        todos: [...state.todos, action.payload]
      };
    }
    case "Remove All": {
      return {
        todos: []
      };
    }
  }
  return state;
}
