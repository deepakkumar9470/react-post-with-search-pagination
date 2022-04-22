import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import Post from './Post'
import Search from './Search'
import ReactPaginate from 'react-paginate';


const Home = () => {

  const [datas,setDatas] = useState([])
  const [query, setQuery] = useState("")
  const [isLoading, setLoading] = useState(false)
  const [pageCount, setPageCount] = useState(0)
  
  let limit = 10


  useEffect(() => {
    const fecthPosts = async () =>{
      try {
         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`)
         setDatas(res.data)
           
      } catch (error) {
        console.log(error)
      }
  }
    
     fecthPosts()
  }, [])
  
const searchData = async (e) =>{
  e.preventDefault()
  try {
      const sear = await axios.get(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
       setDatas(sear.data)
       setLoading(false)
       setQuery('')
  } catch (error) {
    console.log(error)
  }

}


const fecthPostByPages = async (currentPage) =>{
  try {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`)
     const data = res.json()
     return data
       
  } catch (error) {
    console.log(error)
  }
}

const handleClick = async (data) =>{
  console.log('clicked..', data.selected)
  let currentPage = data.selected + 1

  const postFromServer = await fecthPostByPages(currentPage)
  setDatas(postFromServer)
}

  return (

    <div>
        <Search  
               query={query}  
               setQuery={setQuery}  
               searchData={searchData}
               isLoading={isLoading}
              /> 
      
        {isLoading ? (<Spinner/>) : 
          <>
          {datas?.map((post)=>{
                  return (
                    <Post post = {post} key={post.id}/>
                  )
          })} 
          </>
      }

        <ReactPaginate
              className='pagination'
              breakLabel={"..."}
              nextLabel={"next"}
              onPageChange={handleClick}
              marginPagesDisplayed = {4}
              pageCount={pageCount}
              pageRangeDisplayed={5} 
              previousLabel={"previous"}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />

    </div>
  )
}


export default Home