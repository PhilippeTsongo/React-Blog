import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>404. Sorry. Page Not Found!</h2>
            <br />
            <p>We Can't Find That This Page on Our Serve</p>
            <div style={{
                marginTop: '50px'
            }}>
                <Link className="remove" to="/">Go back</Link>
            </div>
        </div>

    );
}
 
export default NotFound;