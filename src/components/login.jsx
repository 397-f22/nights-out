import { Link } from "react-router-dom";
import { useState } from "react";

function Login(){
    const [session, setSession] = useState('');
    const handleChange = event => {
        setSession(event.target.value);          
    };
    
    return(
        <div className="login">
            <div>
                <h1>Join or create a Session</h1>
                <form>
                    <div className="form-group">
                        <label for="sessionKey">Session Key</label>
                        <input type="text" className="form-control" id="sessionKey" aria-describedby="emailHelp" placeholder="Enter session key" onChange={handleChange} value={session} />                    
                    </div>
                    <Link to={"/user/" + session}>
                        <button type="submit" class="btn btn-primary">Join Session</button>
                    </Link>                
                </form>
            </div>
        </div>
    )
}

export default Login;