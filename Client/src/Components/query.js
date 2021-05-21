import React,{useState} from 'react'
import {
    usePaginatedQuery
  } from 'react-query'

const Query = () => {

  const [ page, setPage ] = useState(1);

  
    const fetchPlanets = async (key, page) => {
        const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
        const data= await res.json();
        return data;
    }
    
      const { resolvedData, latestData, status } = usePaginatedQuery(['planets', page], fetchPlanets);
      console.log(resolvedData)
     
     
      return (<div>
          <h2>Planets</h2>
    
          {status === 'loading' && (
            <div>Loading data</div>
          )}
    
          {status === 'error' && (
            <div>Error fetching data</div>
          )} 
    
         {status === 'success' && (
            <>
              <button 
                onClick={() =>{if(page!==1){
                  setPage(page=> page-1)
                }}} 
                disabled={page === 1}>
                Previous Page
              </button>
              <span>{ page }</span>
              <button 
                onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))} 
                disabled={!latestData || !latestData.next}>
                Next page
              </button>
              <div>
                { resolvedData.results.map(planet => {

                  return(
                    <>
                    <h4>{planet.name}</h4>
                    </>
                  )
                }) }
              </div>
            </>
          )}
        </div>
      );
    }
     
export default Query

