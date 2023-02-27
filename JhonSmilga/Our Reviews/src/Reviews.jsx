import React, { useState } from 'react';
import Data from './Data';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
    const [index, setInedx] = useState(0)
    const {image,name,text,job} = Data[index]
    function checkNumber(number){
        if(number> Data.length-1){
            return 0
        } else if(number<0){
            return Data.length-1
        } else{
            return number
        }
    }

    function prevPerson(){
       setInedx(prev=> checkNumber(prev-1))
    }

    function nextPerson(){
        setInedx(prev => checkNumber(prev+1))
    }
    function surprise(){
        let randomIndex = Math.floor(Math.random()*Data.length)
         setInedx(randomIndex)
    }
console.log(index)

  return(<section className='review'>
                    <div className='img-container'>
                        <img className='person-img' src={image}></img>
                        <div className='quote-icon'><i className="fa-solid fa-quote-right"></i></div>
                    </div>
                    <h4 className='author'>{name}</h4>
                    <h4 className='job'>{job}</h4>
                    <p className='text'>{text}</p>
                    <div className='btn-container'>

                    <button onClick={()=>prevPerson()} className='prev-btn'> <i className="uil uil-angle-double-left"></i></button>
                    <button onClick={()=>nextPerson()} className='next-btn'> <i className="uil uil-angle-double-right"></i></button>
                    </div>

                    <button onClick={()=>surprise()} className='random-btn'>Surprise Me</button>
                    
                </section>

  )
};

export default Review;