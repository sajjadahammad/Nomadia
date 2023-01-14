import React from 'react'
import './testimonial.css'

function Testimonial() {
  return (
    <div>
      <h1 className='testimonial-h1'>Testinmonial</h1>
  <div class="testimonial-carousel">
  <div class="testimonial">
    <img src="/people/Rahul.jpg" class="testimonial-img" alt=''/>
    <p class="testimonial-text">"This product is amazing! I highly recommend it."</p>
    <p class="testimonial-author">-Rahul</p>
  </div>
  <div class="testimonial">
    <img src="/people/joshua.jpg" class="testimonial-img" alt=''/>
    <p class="testimonial-text">"I am so impressed with the quality of this product."</p>
    <p class="testimonial-author">-Joshua</p>
  </div>
  <div class="testimonial">
    <img src="/people/alexa.jpg" class="testimonial-img" alt=''/>
    <p class="testimonial-text">"This is a game changer. I will never go back."</p>
    <p class="testimonial-author">-Alexa</p>
  </div>
</div>

    </div>
  )
}

export default Testimonial