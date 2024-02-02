//js reducer function
export function todosReducer(todos, action) {
  switch (action.type) {
    case "added":
      return [
        ...todos,
        { id: action.id, content: action.content, completed: false },
      ];
    case "deleted":
      return todos.filter((todo) => todo.id !== action.id);
    case "updated":
      return todos.map((todo) => {
        if (todo.id == action.id) {
          return { ...todo, content: action.newContent };
        }
        return todo;
      });
    default:
      throw new Error("Unknown action " + action.type);
  }
}
