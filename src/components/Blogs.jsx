import React from 'react';
import articleImage from '../assets/Article_Image-1.png';
import articleAuthor from '../assets/Article_author.png';
import ReactLoading from 'react-loading';
import { useGlobalContext } from '../context';
import Search from './Search';
import Pagination from './Pagination';
import BlogPost from './BlogPost';


const Blogs = () => {

  const { isLoading }= useGlobalContext();

  return (
    <div id='blogs' className='article_wrapper'>
      <div className="container">
        <div className="row mb-5">
          <div className='col-md-7 article_title'>
            <h2 className='sub-heading-1 mb-0'>All Tech Blogs</h2>
            <span></span>
          </div>
          <div className='col-md-5'>
            <Search />
          </div>
        </div>

        <div className="row">
          {/* Article Card */}
          {
            isLoading ? 
            <div className='d-flex justify-content-center my-5'>
              <ReactLoading type={"cylon"} color={"#6246EA"} height={'50px'} width={'50px'} />
            </div>
            :
            <BlogPost />
          }
          
          {/* pagination */}
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Blogs;