import React from 'react'
import Caregivers from './Caregivers'

function Allcaregiver=async()=> {
  const [articles, setArticles]= useState([])
  let data = await fetch(url);
  let parsedData = await data.json()
  setArticles(parsedData.articles);
  return (
    <div>
       <h1 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>The greatest wealth is HEALTH  {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
        //   dataLength={articles.length}
        //   next={fetchMoreData}
        //   hasMore={articles.length !==totalResults}
          loader={<Spinner/>}>
          <div className='container'>

        <div className="row">
          { articles && articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
<Caregivers></Caregivers>           
 </div>
          })}
        </div>
      </div>
        </InfiniteScroll>
    </div>
  )
}

export default Allcaregiver
