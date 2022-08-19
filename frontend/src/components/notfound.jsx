import React from 'react';


const NotFound = () => {
    return ( 
        <div className="error" style={
            {
                color:'red',
                fontSize:'bold'
            }
        }>
            <h1>404</h1>
            <h2>Page Not Found</h2>
        </div>
     );
}
 
export default NotFound;