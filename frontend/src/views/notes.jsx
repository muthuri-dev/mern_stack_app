import { useEffect, useState } from "react";

const Notes = () => {
    const [notes,setNotes]=useState([{
        title:'',
        note:''
    }]);

    useEffect(function(){
        fetch('/notes').then(function(res){
            if(res.ok){
                return res.json();
            }
        }).then(function(jsonRes){
            setNotes(jsonRes)
        }).catch(function(err){
            console.log('retrieve error:  ',err);
        })
    },[]);
    return ( 
        <div className="notes">
            <h2>notes page</h2>
            {notes.map((note)=>
            <div>
                <h1>{note.title}</h1>
                <p>{note.note}</p>
            </div>
            )}
        </div>
     );
}
 
export default Notes;