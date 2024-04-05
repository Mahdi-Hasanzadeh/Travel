import SearchIcon from "../assets/search 1.svg";
import plane from "../assets/sign 1.jpg";
import nature1 from "../assets/unsplash_FQ96bh4O1tY.jpg";
import nature2 from "../assets/unsplash_fCW1hWq2nq0.jpg";
import nature3 from "../assets/unsplash_rjfOdiB7k-E.jpg";
import vector from "../assets/Vector 1.jpg";
import dubai from "../assets/why choose us/unsplash_7tb-b37yHx4.jpg";
import Sea from "../assets/why choose us/unsplash_CihXnvELE00.jpg";
import CustomerImage from "../assets/Customer/unsplash_O3ymvT7Wf9U.jpg";
import location1 from "../assets/Locations/unsplash_LQ_SoWQDk84.png";
import location2 from "../assets/Locations/unsplash_LQ_SoWQDk84 (1).png";
import location3 from "../assets/Locations/unsplash_LQ_SoWQDk84 (2).png";

const Main = () => {
  return (
    <>
      <main className="main w-[95%] mx-auto">
        <section className="hero grid grid-cols-2">
          <div className="left-col flex flex-col justify-center items-center  space-y-10 ">
            <h2 className="text-7xl w-[584px]">
              <span className="underline decoration-orange-400 decoration-4">
                Let's
              </span>{" "}
              Create Memorable Journey
            </h2>
            <p className="text-justify w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              voluptate quis minus ipsum est esse, animi a labore sit qui
              perspiciatis itaque nihil. Perferendis, veniam ex adipisci rerum
              explicabo voluptatum.
            </p>
            <div className="rectangle-info flex  justify-between items-center p-4  w-[496px] bg-slate-50 rounded-2xl">
              <div className="info flex space-x-16">
                <div className="location">
                  <p>location</p>
                  <p>lackshadweep</p>
                </div>
                <div className="date">
                  <p>Date</p>
                  <p>26 Mar,Fri</p>
                </div>
                <div className="price">
                  <p>Price</p>
                  <p>$, 500</p>
                </div>
              </div>
              <div className="search ">
                <img src={SearchIcon} alt="search-icon" />
              </div>
            </div>
          </div>
          <div className="right-col flex space-x-5">
            <div className="space-y-3">
              <img
                width={"250px"}
                height={"427px"}
                src={nature2}
                alt="nature2"
              />
              <img
                width={"250px"}
                height={"399px"}
                src={nature1}
                alt="nature1"
              />
            </div>
            <div>
              <img className="w-[30px] ml-auto" src={plane} alt="plane" />
              <img className="w-[75px] ml-auto" src={vector} alt="vector" />
              <img src={nature3} className="w-[300px]" alt="nature3" />
            </div>
          </div>
        </section>
        <section className="choose-us">
          <div className="left-col">
            <div className="picture section">
              <img src={dubai} alt="dubai" />
              <div className="info">
                {/* I will add an book icon here when I start the desining of this part */}
                <img src="" alt="guide-book" />
                <p>professional Tour Guide</p>
              </div>
            </div>
          </div>
          <div className="right-col">
            <h4>Way choose us?</h4>
            <h3>Plan Your Trip With Us</h3>
            <div className="services">
              <div className="price-guarantee">
                {/* I will add and icon for each services when I start the designing of this part */}
                <img src="" alt="" />
                <div className="price-info">
                  <p>Best Price Guarantee</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>

              <div className="price-guarantee">
                <img src="" alt="" />
                <div className="price-info">
                  <p>Best Price Guarantee</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>

              <div className="price-guarantee">
                <img src="" alt="" />
                <div className="price-info">
                  <p>Best Price Guarantee</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="plane-image-vector">
          <img src={vector} alt="vector" />
          <img src={plane} alt="plane" />
        </section>
        <section className="dictation">
          <h3>Famous dectatin</h3>
          <h2>Our popular Dictation's</h2>
          <div className="slider">
            {/* We can add more locations here in our sliders */}
            <div className="dictations-1">
              <img src={location1} alt="location1" />
              <h4>Lakshadweep</h4>
              <p>$45/person</p>
              <div className="location-info">
                <p>4days</p>
                <p>10 person</p>
                <p>India</p>
              </div>
            </div>
            <div className="dictations-2">
              <img src={location2} alt="location2" />
              <h4>Kaziranga</h4>
              <p>$5/person</p>
              <div className="location-info">
                <p>15days</p>
                <p>15 person</p>
                <p>India</p>
              </div>
            </div>
            <div className="dictations-3">
              <img src={location3} alt="location3" />
              <h4>Sun Temple</h4>
              <p>$15/person</p>
              <div className="location-info">
                <p>12days</p>
                <p>15 person</p>
                <p>Somalia</p>
              </div>
            </div>
          </div>
          {/* Bullet slider */}
          <div className="bullet-slider">
            <ul>
              <li>*</li>
              <li>*</li>
              <li>*</li>
            </ul>
          </div>
        </section>

        <section className="choose-us">
          <div className="left-col">
            <h4>Way choose us?</h4>
            <h3>Choose Dream Dictation For Explore World</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
              aliquam.
            </p>
            <button>About Us</button>
            <div className="travel-agency-experience">
              <p>
                <span>14</span> Years Experience
              </p>
              <p>
                <span>320+</span> Distention Collaboration
              </p>
              <p>
                <span>67+</span> Satisfied Customer
              </p>
            </div>
            <div className="services">
              <div className="price-guarantee">
                <img src="" alt="" />
                <div className="price-info">
                  <p>Best Price Guarantee</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>

              <div className="price-guarantee">
                <img src="" alt="" />
                <div className="price-info">
                  <p>Best Price Guarantee</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>

              <div className="price-guarantee">
                <img src="" alt="" />
                <div className="price-info">
                  <p>Best Price Guarantee</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-col">
            <div className="picture section">
              <img src={Sea} alt="sea" />
              <div className="feedback">
                <img src="" alt="feedback" />
                <p>How Your Exprience?</p>
              </div>
            </div>
          </div>
        </section>

        <section className="what-our-client-says">
          <div className="client-says">
            <div className="testimoniel">
              <h3>What our client say's?</h3>
              <h2>Client Testimonial</h2>
            </div>
            <div className="plane-vector">
              <img src={vector} alt="vector" />
              <img src={plane} alt="plane" />
            </div>
          </div>
          <div className="customer-quote">
            <img src={CustomerImage} alt="customer-image" />
            <div>
              <ul>
                {/* I will add the arrow icon when I start designing this section */}
                <li>left Arrow Icon</li>
                <li>Right Arrow Icon</li>
              </ul>
              <h4>Customer Name</h4>
              <h6>Customer Job</h6>
              <blockquote>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore obcaecati rerum unde iste autem! Quibusdam.
              </blockquote>
            </div>
          </div>
        </section>

        <section className="subscribe-to-us">
          <div className="plane-vector">
            <img src={vector} alt="vector" />
            <img src={plane} alt="plane" />
          </div>
          <div className="subscribe-section">
            <h2>Subscribe To Get The Latest News About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
              excepturi!
            </p>
            <input
              type="text"
              name="email-description"
              placeholder="Enter Your Email"
            />
            <button>Subscribe</button>
          </div>
          <div className="plane-vector">
            <img src={vector} alt="vector" />
            <img src={plane} alt="plane" />
          </div>
        </section>

        <footer>
          <div className="footer-content">
            <section className="social-media-section">
              <h3>Travel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sapiente exercitationem autem iste, rem ad?
              </p>
              <div className="social-media">
                {/* I will add the icons of social media, when I start designing of this section */}
                <ul>
                  <li>facebook icon</li>
                  <li>twitter icon</li>
                  <li>instagram icon</li>
                </ul>
              </div>
            </section>
            <section className="travel-agency-services">
              <h3>services</h3>
              <ul>
                <li>About Us</li>
                <li>Destinations</li>
                <li>Services</li>
                <li>Our Blog</li>
                <li>Contact US</li>
              </ul>
            </section>
            <section className="instagram">
              <h3>Instagram</h3>
              <div className="instagram-images">
                {/* We should add 6 images as sample here for our instagrams */}
                {/* I will add the images when I start designing the footer section */}
                <img src="" alt="image1" />
                <img src="" alt="image2" />
                <img src="" alt="image3" />
                <img src="" alt="image4" />
                <img src="" alt="image5" />
                <img src="" alt="image6" />
              </div>
            </section>
            <section className="contact">
              <h3>Contact</h3>
              <ul>
                <li>Address with icon</li>
                <li>Telephone number with icon</li>
                <li>Email address with icon</li>
              </ul>
            </section>
          </div>
          <div className="copyright">
            <p>TravelToor@2024 all right reserve</p>
          </div>
        </footer>
      </main>
    </>
  );
};
export default Main;
