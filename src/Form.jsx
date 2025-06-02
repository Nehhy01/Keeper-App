import { useState } from "react";

const Form = ({ setNoteList }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleContent = (event) => {
        setContent(event.target.value);
    };

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleSubmit = () => {
        
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" className="input" placeholder="Title" onChange={handleTitle} />

            <textarea
                type="text"
                id="notearea"
                className="input"
                placeholder="Take a Note..."
                onChange={handleContent}
                rows={5}
                cols={40}
            />

            <button type="submit">Add</button>
        </form>
    );
}

export default Form;