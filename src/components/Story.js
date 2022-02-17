import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Story.css";

function Story() {

    const [input, setInput] = useState("");
    const [tags, setTags] = useState([]);
    const [isKeyReleased, setIsKeyReleased] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
    }

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();

        if(key === 'Enter' && trimmedInput.length && !tags.includes(trimmedInput)){
            e.preventDefault();
            setTags(state => [...state, trimmedInput]);
            setInput('');
        }

        if(key === "Backspace" && !input.length && tags.length && isKeyReleased){
            e.preventDefault();
            const tagsCopy = [...tags];
            const poppedTag = tagsCopy.pop();

            setTags(tagsCopy);
            setInput(poppedTag);
        }
        setIsKeyReleased(false);
    };

    const onClick = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        setTags(state => [...state, trimmedInput]);
    }

    const onKeyUp = () => {
        setIsKeyReleased(true);
    }
 
    const deleteTag = (index) => {
        setTags(state => state.filter((tag, i) => i !== index))
    }

  return (
      <>   
        <div className="container">
        <div className="progressBar">
          <div style={{ width: <Story /> ? "83.3%" : "" }} />
        </div>
        <div className="second-container">
          <form className="form-containers" onSubmit={handleSubmit}>
            <textarea className="text-area" placeholder="One sentence user’s personality" />

            <div className="tag-parents">
                <p>Keywords</p>
                <div className="tag-container">
                    {tags.map((tag, index) => 
                        <div className="tag">
                            {tag}
                            <button onClick={() => deleteTag(index)}>X</button> 
                        </div>
                    )}
                    <input
                        value={input}
                        placeholder="Keyword"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                    />
                    <button onClick={onClick}>+</button>
                </div>
            </div>

            <div className="btn-container">
              <Link to="/profile" className="link">
                <button className="previous">Previous</button>
              </Link>
              <Link to="/goal" className="link">
                <button className="next">Next</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      </>
  );
}

export default Story;
