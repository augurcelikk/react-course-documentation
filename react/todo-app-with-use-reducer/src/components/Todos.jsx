import { useState, useReducer } from "react";
import styles from "./Todos.module.css";
import { DATA_TODOS } from "../data";
import { todosReducer } from "../reducers/todosReducer";




export function Todos() {
    const [todosData, dispatch] = useReducer(todosReducer, DATA_TODOS);

    function addTodo(newTodo) {
        dispatch({ type: "added", ...newTodo })
    }

    function deleteTodo(id) {
        dispatch({ type: "deleted", id: id })
    }

    function updateTodo(id, newContent) {
        dispatch({ type: "updated", id: id, newContent })
    }

    return (
        <div className={styles.Todos}>
            <h1>Yapılacaklar Listesi Komponenti</h1>

            <FormAddTodo addTodo={addTodo} />
            <ul>
                {todosData.map(
                    todo => <TodoItem content={todo.content} id={todo.id} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                )}
            </ul>
        </div>
    )
}

function FormAddTodo({ addTodo }) {
    const [todoContent, setTodoContent] = useState("");
    function handleChange(e) {
        setTodoContent(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        //todoContent -> "Spor yap
        const newTodo = { id: crypto.randomUUID(), content: todoContent, isCompleted: false }
        addTodo(newTodo);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={todoContent} type="text" placeholder="Yapılacak bir iş yazınız..." onChange={handleChange} />
            <button type="submit">Ekle</button>
        </form>
    )
}


function TodoItem({ content, id, deleteTodo, updateTodo }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState("");

    const viewTemplate = (
        <li>
            {content}
            <button onClick={handleDeleteTodo}>Sil</button>
            <button onClick={() => { setIsEditing(true) }}>Düzenle</button>
        </li>
    );

    const editTemplate = (
        <li>
            <form onSubmit={handleUpdateTodo}>
                <input type="text" value={newContent} onChange={
                    (e) => { setNewContent(e.target.value) }
                } />
                <button type="submit">Kaydet</button>
                <button type="button" onClick={() => { setIsEditing(false) }}>Kapat</button>
            </form>
        </li>
    );

    function handleUpdateTodo(e) {
        e.preventDefault();
        updateTodo(id, newContent);
        setIsEditing(false);
    }


    function handleDeleteTodo() {
        deleteTodo(id);
    }

    if (isEditing) {

        return editTemplate;
    }

    return (
        viewTemplate
    )
}