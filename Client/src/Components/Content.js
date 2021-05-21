import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const Content = () => {
    
    const data = useSelector(data=>data.Two.user)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [loop, setLoop] = useState('')

    const url = `http://swapi.dev/api/planets/?page=4`
    const api = async () =>{
        const res = await fetch (url);
        const dat = await res.json ();
        dispatch({type:'ADD_PRODUCT', payload: dat})
        setLoop(dat)
    }
    console.log(loop)

    useEffect(() => {
        api()
    },[])
    
    console.log(search)

    return (
        <>
        <div style={{display:'flex', justifyContent:'left'}}>
        <input type='text' placeholder='Search by name' name = 'search' value = {search} onChange={(e)=>setSearch(e.target.value)} style={{padding:'.5rem', marginLeft:'3rem', borderRadius:'.3em', backgroundColor:"white",border:'solid .2em black' ,color:'crimson'}}/><br /><br />
        </div>
        <button className='btn' onClick={()=>dispatch({type:'SORT_BY_AGE'})}>Sort by age</button>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>

            {
              data.filter(e=>e.name.toLowerCase().indexOf(search.toLowerCase())!== -1).map( data => {
                    const {name, age, job, id} = data
                     return(
                        <div key="{id}" className="card">
                            <div className="face face1">
                                <div className="content">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                                <h3>{name}</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                              <p>{job}</p><p>age: {age}</p>
                                <Link to={`/indi/${id}`}>Read More</Link>
                                <button className='btn' style={{marginLeft:'2rem'}} onClick={() =>dispatch({type:'CART', payload: {item: data} })}>
                                    Hire
                                </button>
                                </div>
                            </div>
                        </div>  
                     )
                })
            }
        </div>
        </>
    )
}

export default Content
