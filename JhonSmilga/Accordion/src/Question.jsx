import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (props) => {
    const [isShown, setIsShown] = useState(false)
    const {name,id,info,title}=props

    function handleClick(){
        setIsShown(!isShown)
    }
  return (
    <article className='question'>
        <header>
            <h4>{title}</h4>
            <buttons  onClick={handleClick} className="btn">
                {isShown?
                <AiOutlineMinus />:
                <AiOutlinePlus />
                }
            </buttons>
        </header>
        {isShown && <p>{info}</p>}
    </article>
  );
};

export default Question;