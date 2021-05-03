import { useState } from "react";
import {useHistory} from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [day, setDay] = useState('');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {

         e.preventDefault();
         const blog = {title, body, day};
         setIsPending(true);

         fetch('http://localhost:8000/todos', {
             method: 'POST',
             headers: {"content-type": "application/json"},
             body: JSON.stringify(blog)
         }).then (() => {
             console.log('new blog added');
             setIsPending(false)
             history.push('/');
         })
    }
    return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
                    <label>Task name:</label>
                    <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>To-do:</label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <label>Date:</label>
                    <input type="date"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    />
                    {!isPending && <button>Add task</button>}
                    {isPending && <button>Adding task...</button>}
            </form>
        </div>
     );
}
 
export default Create;