import React from 'react'
import './footer.css'
import {SiYourtraveldottv} from 'react-icons/si'


function Footer() {
  return (
  <>
  <footer>
  <div className="footer-content">
    <div className="footer-section about" style={{'marginLeft':'2rem'}}>
      <h3 style={{color:'white'}}>
        <SiYourtraveldottv size={40} style={{marginRight:'2rem'}}/>Nomadia</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel gravida blandit, ipsum velit malesuada enim, at .</p>
    </div>
    <div className="footer-section links">
      <h3 style={{color:'white'}}>Quick Links</h3>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Aboutus">About</a></li>
        <li><a href="#Service">Services</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </div>
    <div style={{marginRight:'7rem'}}>
        <h5 style={{color:'white'}}>Contact Us</h5>
        <ul class="list-unstyled">
          <li>Email: info@example.com</li>
          <li>Phone: 555-555-5555</li>
          <li>Address: 1234 Main St, City, State 12345</li>
        </ul>
      </div>
    <div className="footer-section contact-form">
      <h3 style={{color:'white'}}>Contact Us</h3>
      <form>
        <input type="email" className='input' name="email" placeholder="  Enter your email"/>
        <textarea name="message"className='input' placeholder="  Your message"></textarea>
        <button type="submit" className="btn1">Send</button>
      </form>
    </div>
  </div>
  <div className="footer-bottom">
    <p>Copyright &copy; 2021. All rights reserved.</p>
  </div>
</footer>

  </>
  )
}

export default Footer