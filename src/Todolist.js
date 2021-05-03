import { Link } from "react-router-dom";

const Todolist = ({blogs}) => {
    

    return ( 
        <div className="todo-list">
              {blogs.map((blog) =>(
              <div className="blog-preview" key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Date: {blog.day}</p>
                  </Link>
              </div> 
           ))}
        </div>
    )
}
export default Todolist;