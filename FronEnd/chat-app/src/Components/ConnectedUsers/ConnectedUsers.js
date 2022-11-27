import React from "react";

const ConnectedUsers =  ({ users }) => 
{       
    //let usersToRender = null;
    // useEffect(() => {
    //     usersToRender =  users.length > 0  ?  
    //     (users.map((usr) => 
    //     {  {console.log("User ", usr)}
    //     <p>{usr}</p>})) : (<h1>empty</h1>)
    // },[]);

    let numOfUsers =  users.length > 0  ? users.length : 0;

    return (
        <div className="users-list"> 
            <h4>{numOfUsers} Online Users</h4>
            {/* {usersToRender}   */}
        </div>
    )};

export default ConnectedUsers;
 