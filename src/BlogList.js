import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>

                    <Link to={`blog/${blog.id}`}>
                        <h2>{ blog.title}</h2>
                        <p>Written by: { blog.author}</p> 
                    </Link>
                    
                    <div className="remove">
                        <button onClick={ () => handleDelete(blog.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;

