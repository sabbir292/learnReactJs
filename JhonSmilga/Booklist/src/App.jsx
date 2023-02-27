import React from "react";
import './index.css'
const Data = [
  {
      id:1,
      title:'The Atomic Habit',
      img:'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY218_.jpg',
      author: 'James Clear'
  },
  {
      id:2,
      title:'Ikigai: The Japanese secret to a long and happy life',
      img:'https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY218_.jpg',
      author: 'Héctor and Miralles'
  },
  {
      id:3,
      title:'A Walk in my Shoes',
      img:'https://m.media-amazon.com/images/I/41pIYURtzWL._SX311_BO1,204,203,200_.jpg',
      author: 'Ritesh Karnani '
  },
  {
      id:4,
      title:'The Psychology of Money',
      img:'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg',
      author: 'Morgan Housel'
  },
  {
      id:6,
      title:'A Thousand Times Ove',
      img:'https://m.media-amazon.com/images/I/71KWcZgppuL._AC_UY218_.jpg',
      author: 'Sudhanshu Bisen'
  },
  {
      id:6,
      title:'The Blue Umbrella',
      img:'https://m.media-amazon.com/images/I/71JZ0neAP1L._AC_UY218_.jpg',
      author: 'Ruskin Bond '
  },
]

export default function App(){
  return (
    <section className="booklist">
      {showBook}
    </section>
    )
}


const Book = (props)=> {
console.log(props)
const {img,title,author} = props
 return <article className="article">
          <img src = {img} className="img"></img>
          <h1 className="title">{title}</h1>
          <h4 className="author">{author}</h4>
        </article>
}
  

const showBook = Data.map(obj=>{
  return <Book {...obj}/>
})
