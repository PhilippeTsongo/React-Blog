import { useState } from "react";

const Create = () => {

    const { title, setTitle } =  useState('');
    const { body, setBody } =  useState('');
    // const { author, setAuthor } =  useState('');

    return (  
        <div className="create">
            <h2>Add a New Article</h2>

            <form>
                <label>Article Tile</label>
                <input
                    type="text"
                    value={ title }
                    onchange={ (e) => setTitle(e.target.value)}
                    required
                >
                </input>
                
                <label>Article Body</label>
                <textarea
                    required
                    value={ body }
                    onchange={ (e) => setBody(e.target.value)}
                >
                </textarea>
                
                <label>Article Author</label>
                <select>
                    <option>Philippe</option>
                    <option>Tsongo</option>
                </select>

                <button>Add Article</button>
                <p>{ title }</p>
                <p>{ body }</p>
            </form>
        </div>
    );
}
 
export default Create;