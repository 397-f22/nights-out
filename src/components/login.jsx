import { Link } from "react-router-dom";
import { useState } from "react";

function Login(){
    const [group, setGroup] = useState('');
    const [pass, setPass] = useState('');
    const handleGroupChange = event => {
        setGroup(event.target.value);          
    };
    
    return(
        <div className="login">
            <div>
                <h2>Join or create a Group</h2>
                <form>
                    <div className="form-group">
                        <label for="sessionKey">Group ID</label>
                        <input type="text" className="form-control" id="sessionKey" placeholder="Enter group ID" onChange={handleGroupChange} value={group} />                 
                    
                    </div>
                    <br></br>
                    <Link to={"/user/" + group}>
                        <button type="submit" class="btn btn-outline-danger">Join the Fun</button>
                    </Link>                
                </form>
            </div>
        </div>
    )
}

export default Login;