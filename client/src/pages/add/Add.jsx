import React from 'react'
import "./Add.scss"

const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="I will do something. I'm really good at"/>

            <label htmlFor="">Category</label>
            <select name='cats' id='cats'>
              <option value="design">Design</option>
              <option value="art">Art</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label htmlFor="">Cover Image</label>
            <input type="file"/>
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple/>
            <label htmlFor="">Descripiton</label>
            <textarea 
              name="" 
              id="" 
              cols="30" 
              rows="15"
              placeholder='Description'
            >
            </textarea>

            <button>Create</button>
          </div>

          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='One-page web design'/>

            <label htmlFor="">Short Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Short description'></textarea>

            <label htmlFor="">Delivery Time</label>
            <input type="number" min={1}/>

            <label htmlFor="">Revision Number</label>
            <input type="number" min={1}/>

            <label htmlFor="">Add Features</label>
            <input type="text" placeholder='page design'/>
            <input type="text" placeholder='file uploading'/>
            <input type="text" placeholder='setting up a domain'/>
            <input type="text" placeholder='hosting'/>

            <label htmlFor="">Price</label>
            <input type="number" min={1} placeholder='Price'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
