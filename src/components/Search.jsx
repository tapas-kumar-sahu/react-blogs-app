import React from 'react'
import { useGlobalContext } from '../context';

const Search = () => {
    const {query, searchArticle} = useGlobalContext();

  return (
    <>
        <form className='mt-4 mt-md-0' onSubmit={(e)=>e.preventDefault()}>
            <input className="form-control me-2 article_search" 
                type="text" 
                placeholder="Search blog..." 
                aria-label="Search"  
                // value={query}
                onChange={(e)=>searchArticle(e.target.value)}                      
            />
        </form>
    </>
  )
}

export default Search;