
import { useState } from "react";
import axios from 'axios';
import React from 'react';


const Create = () => {
    const[title,setTitle]=useState('');
    const[note,setNote]=useState('');

    async   function handleSubmit(e){
        e.preventDefault();
        console.log({title,note});
        const newNote={
            title:title,
            note:note
        }
        axios.post('http://localhost:8000/create',newNote)
    }
    
    return ( 
        <div className="create">
            <h3>Create notes here</h3>
            <form onSubmit={handleSubmit} >
                <input 
                 value={title}
                  onChange={function(e){
                    setTitle(e.target.value);
                }}
                 type="text" name="title"
                 placeholder="Notes title" />

                <textarea onChange={function(e){
                    setNote(e.target.value);
                }}
                value={note} name="note"  
                cols="30" placeholder="Notes content"></textarea>
                <button>ADD NOTE</button>
            </form>
        </div>
     );
}
 
export default Create;