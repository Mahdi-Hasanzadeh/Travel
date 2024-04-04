import SearchIcon from "../assets/search 1.svg";
import plane from "../assets/sign 1.jpg";
import nature1 from "../assets/unsplash_FQ96bh4O1tY.jpg";
import nature2 from "../assets/unsplash_fCW1hWq2nq0.jpg";
import nature3 from "../assets/unsplash_rjfOdiB7k-E.jpg";
import vector from "../assets/Vector 1.jpg";
import dubai from "../assets/why choose us/unsplash_7tb-b37yHx4.jpg";
import Sea from "../assets/why choose us/unsplash_CihXnvELE00.jpg";
import CustomerImage from "../assets/Customer/unsplash_O3ymvT7Wf9U.jpg";

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
        <section className="plane-image-vector"></section>
        <section className="dictation">
          <h3>Famous dectatin</h3>
          <h2>Our popular Dictation's</h2>
          <div className="slider">
            <div className="dictations-1">
              <img src="" alt="" />
              <h4>Lakshadweep</h4>
              <p>$45/person</p>
              <div className="location-info">
                <p>4days</p>
                <p>10 person</p>
                <p>India</p>
              </div>
            </div>
            <div className="dictations-2">
              <img src="" alt="" />
              <h4>Lakshadweep</h4>
              <p>$45/person</p>
              <div className="location-info">
                <p>4days</p>
                <p>10 person</p>
                <p>India</p>
              </div>
            </div>
            <div className="dictations-3">
              <img src="" alt="" />
              <h4>Lakshadweep</h4>
              <p>$45/person</p>
              <div className="location-info">
                <p>4days</p>
                <p>10 person</p>
                <p>India</p>
              </div>
            </div>
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
              <img src="" alt="" />
            </div>
          </div>
          <div className="customer-quote">
            <img src={CustomerImage} alt="customer-image" />
            <div>
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
          <div className="plane"></div>
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
          <div className="plane"></div>
        </section>

        <footer>
          <div className="footer-content">
            <section className="social-media-section">
              <h3>Travel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sapiente exercitationem autem iste, rem ad?
              </p>
              <div className="social-media"></div>
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
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
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
          <div className="copyright">TravelToor@2024 all right reserve</div>
        </footer>
      </main>
    </>
  );
};
export default Main;
