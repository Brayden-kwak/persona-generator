import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import {addName, addAge, addJob, addImage} from '../store';
import PropTypes from 'prop-types';

function Profile({persona, addName, addAge, addJob, addImage}) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [job, setJob] = useState("");
    
    const [images, setImages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addName(name);
        addAge(age);
        addJob(job);
        addImage(images);
        setName("");
        setAge("");
        setJob("");
    }

    const onChange = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        if(file){
            reader.onloadend = () => 
                setImages(reader.result);
            reader.readAsDataURL(file);
            setImages(event.target.files[0]);
        } else {
            alert('File uploaded is not valid');
        }
      }
    
  return (
      <>
        <div className="container">
            <div className="second-container">
                <div className="input-container">
                    <form onSubmit={handleSubmit}>
                        {images && (
                            <img 
                                src={images}
                                alt="img"
                                style={{width:"150px", height:"150px"}}
                            />
                        )}
                        <div>
                            <input 
                                name="images"
                                type="file" 
                                onChange={onChange}
                            />
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Age"
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Job"
                                value={job}
                                onChange={(e)=>setJob(e.target.value)}
                            />
                        </div>
                        <button>
                            <Link to="/personality">next</Link>
                        </button>
                        
                    </form>
                    {persona?.map((item) => (
                        <>
                            <h1 key={item?.id}>{item.name}</h1>
                            <h1 key={item?.id}>{item.age}</h1>
                            <h1 key={item?.id}>{item.job}</h1>
                            <img src={item?.images} alt="" key={item?.id}/>
                        </>
                    ))}
                </div>
            </div>
        </div>
      </>
  );
}

const mapStateToProps = (state) => {
    return { persona: state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addName: text => dispatch(addName(text)),
        addAge: text => dispatch(addAge(text)),
        addJob: text => dispatch(addJob(text)),
        addImage: text => dispatch(addImage(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);


// <ImageUploading
                    //     multiple
                    //     value={images}
                    //     onChange={onChange}
                    //     maxNumber={maxNumber}
                    //     dataURLKey="data_url"
                    // >
                    //     {({
                    //         imageList,
                    //         onImageUpload,
                    //         onImageRemoveAll,
                    //         onImageUpdate,
                    //         onImageRemove,
                    //         isDragging,
                    //         dragProps,
                    //     }) => (
                    //         <div className="image-wrapper">
                    //             <button
                    //                 style={isDragging ? { color: 'red' } : undefined}
                    //                 onClick={onImageUpload}
                    //                 {...dragProps}
                    //             >
                    //             Click or Drop here
                    //             </button>
                    //             {imageList.map((image, index) => (
                    //                 <div key={index} className="image-item">
                    //                     <img src={image['data_url']} alt="" width="100" />
                    //                     <div className="image-item__btn-wrapper">
                    //                     <button onClick={() => onImageUpdate(index)}>Update</button>
                    //                     <button onClick={() => onImageRemove(index)}>Remove</button>
                    //                     </div>
                    //                 </div>
                    //             ))}
                    //         </div>
                    //     )}
                    //     </ImageUploading> 