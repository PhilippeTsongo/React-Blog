import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [ title, setTitle ] =  useState('');
    const [ body, setBody ] =  useState('');
    const [ author, setAuthor ] =  useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const article = { title, author, body };
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(article)
        }).then(() => {
            console.log('data submited successfully');
            setInterval(()=>{
                setIsPending(false);
            }, 2000)
            // setIsPending(false);
            navigate('/'); 
        })


    }

    return (  
        <div className="create">
            <h2>Add a New Article</h2>

            <form onSubmit={handleSubmit}>
                <label>Article Tile</label>
                <input
                    type="text"
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value)}
                    required
                >
                </input>
                
                <label>Article Body</label>
                <textarea
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value)}
                >
                </textarea>
                
                <label>Article Author</label>
                <select
                required
                value={author}
                onChange={ (e) => setAuthor(e.target.value)}
                >
                    <option>Select the author</option>
                    <option>Philippe</option>
                    <option>Tsongo</option>
                </select>

                { !isPending && <button>Add Article</button>}
                { isPending && <button>Adding New Article...</button>}

            </form>
        </div>
    );
}
 
export default Create;