
import Todolist from './Todolist';
import useFetch from './useFetch';


const Home = () => {
 
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/todos');
    
   

    return ( 
        <div className="home">
         {error && <div>{error}</div>}
         {isPending && <div>Loading tasks...</div>}
         { blogs && <Todolist blogs={blogs} title= 'All tasks' />}
        </div>
     );
}
 
export default Home;