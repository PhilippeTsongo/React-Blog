import BlogList from "./BlogList";

import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error, setData } = useFetch('http://localhost:8000/blogs');
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id );
        setData(newBlogs)
    }

    return ( 
        <div className="home">
            { isPending && <div>Loading</div>}
            { error && <div>{ error } </div>}

           { blogs && <BlogList blogs={blogs} title="All Articles" handleDelete={handleDelete} /> }
        </div>
     );
}
 
export default Home;
