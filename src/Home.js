import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs] = useState([
        {title: 'Real gangs', body: 'Real gangs are real lendends that need good protection', author: 'Philippe', id: 1},
        {title: 'Traffic jams', body: 'This is actually caussed by drivers who don\'t respect the code', author: 'Tsongo', id: 2},
        {title: 'The last day', body: 'On the last day of our training at this amazing and ....', author: 'Phil', id: 3},
    ]);

    const title = 'All  articles';    

   
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={title} />
        </div>
     );
}
 
export default Home;
