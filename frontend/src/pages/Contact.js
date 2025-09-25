import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-section">
      {/* Heading Centered */}
      <h2 className="contact-heading">Talk To Us</h2>

      <div className="contact-container">
        {/* Left Side - Features */}
        <div className="contact-left">
          <ul>
            <li>✅ Trusted by logistics teams worldwide</li>
            <li>✅ Proven savings of up to 33% on per-delivery cost</li>
            <li>✅ Reliable customer support from our dedicated team</li>
            <li>✅ Seamless integration with your existing tools</li>
            <li>✅ Real-time tracking and live updates for customers</li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Full Name" />

            <label htmlFor="company">Company Name</label>
            <input id="company" type="text" placeholder="Company Name" />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="example@email.com" />

            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" placeholder="+000 (0) 0000000" />

            <label htmlFor="message">Message (optional)</label>
            <textarea id="message" placeholder="Enter your message here"></textarea>

            <div className="checkbox">
              <input id="agree" type="checkbox" />
              <span>
                By submitting, you agree to our{" "}
                <a href="#!" onClick={(e) => e.preventDefault()}>
                  terms
                </a>{" "}
                and{" "}
                <a href="#!" onClick={(e) => e.preventDefault()}>
                  privacy policy
                </a>
              </span>
            </div>

            <button type="submit">Let's talk</button>
          </form>
        </div>

        {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-card">
          <h3 className="testimonial-title">SuperValu</h3>
          <h4 className="testimonial-highlight">
            IMPROVED OUR OPERATIONAL EFFICIENCY
          </h4>
          <p className="testimonial-text">
            The SmartRoutes platform has provided us with an additional touch
            point for our customers via the text message with tracking
            information. We've received really positive feedback on the system
            both from our customers around being able to track their orders as
            well as from stores on the positive impact it's had on our
            fulfilment processes.
          </p>
          <p className="testimonial-author">
            <strong>Caroline W.</strong> – SuperValu/Musgrave
          </p>
        </div>

        <div className="partner-logos">
          <img src="/ezliving.png" alt="EZ Living Interiors" />
          <img src="/homecare.png" alt="Homecare Medical" />
          <img src="/sofstyle.png" alt="Sofa Style" />
          <img src="/irishtimes.png" alt="The Irish Times" />
          <img src="/supervalu.png" alt="SuperValu" />
          <img src="/aramex.png" alt="Aramex" />
          <img src="/buseireann.png" alt="Bus Eireann" />
          <img src="/bullbag.png" alt="Bull Bag" />
          <img src="/empire.png" alt="Empire Office" />
          <img src="/sts.png" alt="STS Recycling" />
        </div>
      </section> 

      
      </div>
    </div>
  );
}

export default Contact;
