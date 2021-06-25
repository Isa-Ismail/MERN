import React, {useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import Modal from './Modal'

function Form() {
  const [user, setUser] = useState ({
    name:'',
    age:'',
    job:'',
    wages:'',
    email:'',
    password:''
})
  
  const dispatch = useDispatch();

  const Handler =(e)=>{
    if(e.target.name==='age' || e.target.name === 'wages'){
      const name= e.target.name
      const value= e.target.value
      setUser(user=>{ return {...user, [name]:parseInt(value)} })
    }else{
      const name= e.target.name
      const value= e.target.value
      setUser({...user, [name]:(value)})
    }
  }
  const Wow = (e) =>{
    e.preventDefault();
    if(user.name && user.age && user.job && user.wages && user.email && user.password){
      let newUser = {...user, id: new Date().getTime().toString(), total:0}
      dispatch({type:'SUBMIT', payload: {set:newUser}})
      setUser({
        name:'',
        age:'',
        job:'',
        wages:'',
        email:'',
        password:''
    })
    }
  }

  useEffect(()=>{

  },[])

 
  console.log(user)

  return ( 
              <>
              <br/><br/>
              <Modal />
              <br/><br/>
              <br/><br/>
               <article className='form'>
                <h4>Employee Recruitment Software</h4>
                <form className='form-control' action="" method="POST" onSubmit={Wow}>
                  <label>Name</label>
                  <input type='text' name='name' value={user.name} onChange={Handler}/>
                  <label>Age</label>
                  <input type='text' name='age' value={user.age} onChange={Handler}/>
                  <label>Job</label>
                  <input type='text' name='job' value={user.job} onChange={Handler}/>
                  <label>wages</label>
                  <input type='text' name='wages' value={user.wages} onChange={Handler}/>
                  <label>Email</label>
                  <input type='text' name='email' value={user.email} onChange={Handler}/>
                  <label>Password</label>
                  <input type='password' name='password' value={user.password} onChange={Handler}/>
                  <button type='submit'>Submit</button>
                </form>
              </article>
              
            </>
              
  );
}

export default Form;
