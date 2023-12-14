import React from 'react'
import { Link } from "react-router-dom"
import "./MyGigs.scss"

const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className="container">

        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>

        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>

          <tr>
            <td>
              <img 
                className='image'
                src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
                alt="" 
              />
            </td>
            <td>Gig1</td>
            <td>68.68</td>
            <td>68</td>
            <td>
              <img 
                className="delete" 
                src="/img/delete.png" 
                alt="" 
              />
            </td>
          </tr>

          <tr>
            <td>
              <img 
                className='image'
                src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
                alt="" 
              />
            </td>
            <td>Gig1</td>
            <td>68.68</td>
            <td>68</td>
            <td>
              <img 
                className="delete" 
                src="/img/delete.png" 
                alt="" 
              />
            </td>
          </tr>

          <tr>
            <td>
              <img 
                className='image'
                src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
                alt="" 
              />
            </td>
            <td>Gig1</td>
            <td>68.68</td>
            <td>68</td>
            <td>
              <img 
                className="delete" 
                src="/img/delete.png" 
                alt="" 
              />
            </td>
          </tr>

          <tr>
            <td>
              <img 
                className='image'
                src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
                alt="" 
              />
            </td>
            <td>Gig1</td>
            <td>68.68</td>
            <td>68</td>
            <td>
              <img 
                className="delete" 
                src="/img/delete.png" 
                alt="" 
              />
            </td>
          </tr>

          <tr>
            <td>
              <img 
                className='image'
                src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
                alt="" 
              />
            </td>
            <td>Gig1</td>
            <td>68.68</td>
            <td>68</td>
            <td>
              <img 
                className="delete" 
                src="/img/delete.png" 
                alt="" 
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs
