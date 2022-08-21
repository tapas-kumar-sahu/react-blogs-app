import React from 'react'
import { useGlobalContext } from '../context';


const Pagination = () => {
  const {page, nbPages, prevPage, nextPage} = useGlobalContext();

  return (
    <div className='pagination_wrapper'>
      <div className="container">
        <div className="row ">
          <div className="my-4 d-flex justify-content-center align-items-center">
            <button className="btn-primary-blue" disabled={page === 0} type="submit" onClick={prevPage}>Prev</button>
            <p className='mb-0 paragraph-1 mx-3'>{page + 1} out of {nbPages}</p>
            <button className="btn-primary-blue" disabled={page === 49} type="submit" onClick={nextPage}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination;