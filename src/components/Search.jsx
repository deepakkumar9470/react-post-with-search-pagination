import React from 'react'

const Search = ({query,setQuery,isLoading,searchData}) => {
    console.log(query)
    return (
        <section className="searchbox-wrapper">
             
             <div className="head">
               <h2 className='post_head'>React Posts App</h2>
             </div>

             <div className="input_wrapper">
              
              <input 
                  className="searchbox" 
                  type="text" 
                  name="movie" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter post to search.." />


                <button 
                   className="search_btn" 
                   type="submit" 
                   onClick={searchData}
                   disabled={isLoading}
                   >Search!
              </button>
              

             </div>
             
            

        </section>
   )
}

export default Search