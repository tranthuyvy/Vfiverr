import React from 'react'
import "./Orders.scss"

const Orders = () => {

  const currentUser = {
    id : 1,
    username:"Vy",
    isSeller: true
  };

  return (
    <div className='orders'>
      <div className="container">

        <div className="title">
          <h1>Orders</h1>
        </div>

        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
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
                className="message" 
                src="/img/message.png" 
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
                className="message" 
                src="/img/message.png" 
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
                className="message" 
                src="/img/message.png" 
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
                className="message" 
                src="/img/message.png" 
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
                className="message" 
                src="/img/message.png" 
                alt="" 
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders
