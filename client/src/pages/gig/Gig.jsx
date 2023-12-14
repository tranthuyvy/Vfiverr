import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            VFIVERR &gt; GRAPHICS &amp; DESIGN &gt;
          </span>
          <h1>I will create ai generated art for you</h1>

          <div className="user">
            <img className="pp" src="/img/person.png" alt="" />
            <span>Thuy Vy</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>

          <h2>About This Gig</h2>
          <p>TTV | ThuyVy. I don't know how to write anything here. I need an English degree so I'm studying English to prepare for the TOEIC exam. I hope I will have good luck. Besides, I hope I will find a stable job in my major. Let's go</p>

          <div className="seller">
            <h2>About The Seller</h2>

            <div className="user">
              <img src="/img/person.png" alt="" />

              <div className="info">
                <span>Thuy Vy</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>

            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">HCM</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Thuy Vy, I enjoy creating AI generated art in my
                spare time.
              </p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className="pp" src="/img/person.png" alt="" />
                <div className="info">
                  <span>Thuy Vy</span>
                  <div className="country">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKfyHYXA03oDmGooZLwXtDGlxRsOz5DlTWFH0e3B4SyyhXtGFRaF-5nt6Laff1W0Kwu0&usqp=CAU"
                      alt=""
                    />
                    <span>Vietnameses</span>
                  </div>
                </div>
              </div>

              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>

              <p>I just want to say that art_with_ai was the first.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>

            <hr />

            <div className="item">
              <div className="user">
                <img className="pp" src="/img/person.png" alt="" />
                <div className="info">
                  <span>Thuy Vy</span>
                  <div className="country">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKfyHYXA03oDmGooZLwXtDGlxRsOz5DlTWFH0e3B4SyyhXtGFRaF-5nt6Laff1W0Kwu0&usqp=CAU"
                      alt=""
                    />
                    <span>Vietnameses</span>
                  </div>
                </div>
              </div>

              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>

              <p>I just want to say that art_with_ai was the first.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>

            <hr />

            <div className="item">
              <div className="user">
                <img className="pp" src="/img/person.png" alt="" />
                <div className="info">
                  <span>Thuy Vy</span>
                  <div className="country">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKfyHYXA03oDmGooZLwXtDGlxRsOz5DlTWFH0e3B4SyyhXtGFRaF-5nt6Laff1W0Kwu0&usqp=CAU"
                      alt=""
                    />
                    <span>Vietnameses</span>
                  </div>
                </div>
              </div>

              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>

              <p>I just want to say that art_with_ai was the first.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>

          </div>
        </div>

        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 68.68</h2>
          </div>

          <p>I will create a unique high quality AI generated image based on a description that you give me</p>

          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>

            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>

          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>

            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Art</span>
            </div>

            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image</span>
            </div>

            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Addtional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
