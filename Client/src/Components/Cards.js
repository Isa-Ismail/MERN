import React from 'react'
import {Link} from 'react-router-dom'

const Cards = () => {
    return (
      <> 
         <h2>Here is some list of our services</h2>
         <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                  <h3>Design</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                  <a href="#">Read More</a>
                  <button className='btn'>hola</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                  <h3>Code</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                  <a href="#">Read More</a>
                  <button className='btn'>hola</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                  <h3>Launch</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Lorem ipsum dolor si t amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                  <a href="#">Read More</a>
                  <button className='btn'>hola</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src="https://i.gadgets360cdn.com/large/best_phones_under_20000_december_cover_1608205728382.jpg?downsize=910:*&output-quality=80" style={{height:'150px'}}/>
                  <h3>Launch</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p> Quas cum cumque minus iste veritatis provident at.</p>
                  <a href="#">Read More</a>
                  <button className='btn'>hola</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src="https://i.insider.com/578e9e4588e4a77c708b8db1?width=750&format=jpeg&auto=webp" />
                  <h3>Launch</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Lorem ipsum dolor si t amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                  <a href="#">Read More</a>
                  <button className='btn'>hola</button>
                </div>
              </div>
            </div>
        </div>

     </>
    )
}

export default Cards
