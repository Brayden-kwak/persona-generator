import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function TitleIndustry() {

    const [title, setTitle] = useState("");

    const onChange = (e) => {
        setTitle(e.target.value);
    }

  return (
      <>
        <h1>Persona Title</h1>
        <input
            type="text"
            placeholder="Title of this persona"
            value={title}
            onChange={onChange}
        />
        {/* <Link></Link> */}
      </>
  );
}

export default TitleIndustry;
