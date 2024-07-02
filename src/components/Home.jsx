import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [page, setPage] = useState(1)
  const [images, setImages] = useState([]);
  console.log(images);
  const getimages =async ()=>{
      const {data}= await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
      setImages(data);
  }
  const arr = [1,2,3,4,5,6,7,7,8]

  useEffect(() => {
    console.log(arr[page]);
    getimages();
  }, [page])
  
  return (
    <>
      <div className="images flex gap-5 flex-wrap justify-center px-16 my-10">
       {images.length > 0 ? 
       images.map(image => <img key={image.id} className="h-36 w-36 rounded" src={image.download_url} alt="" />
      ) :
        <h1>no images here</h1>
        }
      </div>
      
      <div className="pagination flex items-center justify-center gap-4">
        <button onClick={()=> page>1 && setPage(page - 1)} className='px-5 py-3 bg-blue-500 rounded text-white'>prev</button>
        <h1>{page}</h1>
        <button onClick={()=> setPage(page+1)} className='px-5 py-3 bg-blue-500 rounded text-white'>Next</button>
      </div>
    </>
  )
}

export default Home