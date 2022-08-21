import React from 'react';
import { useGlobalContext } from '../context';
import {images} from '../constants/index';

const BlogPost = () => {

  const { hits, nbPages, removeArticle }= useGlobalContext();
  
  const isSingleNumber = (num) =>{
    return num > 9 ? num : "0"+ num; 
  }
  const publishDate = (str) => {
    const date = new Date(str)
    return `${isSingleNumber(date.getDate())}-${isSingleNumber(date.getMonth())}-${date.getFullYear()}`
  }

  return (
    <>
    {
        hits.map(( {objectID, url, title, author, created_at} ) =>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5" key={objectID}>
          <a href={url} target="_blank" className="article_card d-flex flex-column justify-content-between">
            <div>
              <img src={images[Object.keys(images)[Math.floor(Math.random()*Object.keys(images).length)]]} alt="Blog-banner" className='article_img mb-3 img-fluid' />
              <h3 className='article_title sub-heading-2 mb-4'>{(title).substring()}</h3>
            </div>
            <div className='article_author'>
              <img className='img-fluid' src={`https://source.unsplash.com/random/100x100/?Face/?${Math.floor(Math.random() * 50)}`} alt="" />
              <div className='ps-2'>
                <p className='paragraph-3-semi-bold mb-2'>{author}</p>
                <p className='paragraph-4'> {publishDate(created_at)} <span className='fw-bold'>∙</span> {Math.floor(Math.random() * 10) + 1} min read</p>
              </div>
            </div>
            {/* <button onClick={()=>removeArticle(objectID)}>remove</button> */}
          </a>
        </div>
      )
    }
    </>
  )
}

export default BlogPost