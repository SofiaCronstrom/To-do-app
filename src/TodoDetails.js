import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TodoDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/todos/' + id);
    const history = useHistory();

    const handleClick = () => {
fetch('http://localhost:8000/todos/' + blog.id, {
    method: 'DELETE'
}).then(() => {
history.push('/');
})
    }

    return ( 
       <div className="todo-details">
           {isPending && <div>Loading...</div>}
           {error && <di>{error}</di>}
           {blog && (
               <article>
                   <h2>{blog.title}</h2>
                   <p>Date: {blog.day}</p>
                   <div>{blog.body}</div>
                   <button onClick={handleClick}>Delete task</button>
               </article>
           )}
       </div> 
     );
}
 
export default TodoDetails;