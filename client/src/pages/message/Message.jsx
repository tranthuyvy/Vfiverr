import React from 'react'
import { Link } from "react-router-dom"
import "./Message.scss"

const Message = () => {
  return (
    <div className='message'>
      <div className="container">

        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> &gt; Thuy Vy &gt;
        </span>

        <div className="messages">
          <div className="item">
            <img src="/img/person.png" alt="" />
            <p>This is message. I'm writing to test func
            This is message. I'm writing to test func. This is message. I'm writing to test func
            </p>
          </div>

          <div className="item owner">
            <img src="/img/person.png" alt="" />
            <p>This is message. I'm writing to test func
            This is message. I'm writing to test func
            This is message. I'm writing to test func
            </p>
          </div>

          <div className="item">
            <img src="/img/person.png" alt="" />
            <p>This is message. I'm writing to test func
            This is message. I'm writing to test func
            This is message. I'm writing to test func
            </p>
          </div>

          <div className="item owner">
            <img src="/img/person.png" alt="" />
            <p>This is message. I'm writing to test func
            This is message. I'm writing to test func
            This is message. I'm writing to test func
            </p>
          </div>

          <div className="item">
            <img src="/img/person.png" alt="" />
            <p>This is message. I'm writing to test func
            This is message. I'm writing to test func
            This is message. I'm writing to test func
            This is message. I'm writing to test func
            </p>
          </div>

          <div className="item owner">
            <img src="/img/person.png" alt="" />
            <p>This is message. I'm writing to test func
            This is message. I'm writing to test func
            This is message. I'm writing to test func
            This is message. I'm writing to test func
            This is message. I'm writing to test func
            </p>
          </div>
        </div>

        <hr />

        <div className="write">
          <textarea name="" placeholder='message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
