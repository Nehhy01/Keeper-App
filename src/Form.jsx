import { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleInput = (event) => {
        setTitle(event.target.value);
    };

    return (
        <Form className="form">
            <input type="text" className="input" placeholder="Title" onChange={handleInput} />
            
            <input type="text" className="input" placeholder="Take a Note..." />
        </Form>
    );
}

export default Form;