import React from 'react'
import './Contact.css'
import Footer from "../HomePage/footer/Footer"

const Contact = () => {
  return (
    <div id='contactpage'>
    <div >
      <br/>
      <h1 className="Top_heading">Explore Our Branches</h1>
  {/* <!-- BEGIN: card --> */}
<div style={{display:"flex",justifyContent:"space-between",marginLeft:"5rem"}}>
  {/* Erode branch */}
  <section class="wrapper1" >
  <div class="card" data-effect="zoom">
    <figure  class="card__image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuN8lF3Ai5oJrSjCX8xtQC8G_38PlHfSlECQ&usqp=CAU" alt="Short description"/>
    </figure>
    <div class="card__header">
      <figure class="card__profile" style={{backgroundColor:"lightgray"}}>
      <iframe title="Erode branch" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62591.877854922204!2d77.68213999747078!3d11.335267847602756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f453662e947%3A0x8c6f1f550a95b4b!2sSanjay&#39;s%20Fine%20Foods!5e0!3m2!1sen!2sin!4v1679411546683!5m2!1sen!2sin" />
      </figure>
    </div>
    <div class="card__body">
      <br/><br/>
      <h3 class="card__name">Erode Branch</h3><br/>
      <p class="card__job" >Click To Know More</p>
      <p class="card__bio">9, 4, Mosikeernar St, near Royal Stage Krishna theatre, Backside, Erode, Tamil Nadu 638003</p>
    </div>
  </div>
</section>
{/* Perundurai branch */}

<section class="wrapper1" >
  <div class="card" data-effect="zoom">
 
    <figure  class="card__image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuN8lF3Ai5oJrSjCX8xtQC8G_38PlHfSlECQ&usqp=CAU" alt="Short description"/>
    </figure>
    <div class="card__header">
      <figure class="card__profile" style={{backgroundColor:"lightgray"}}>
      <iframe title="perundurai branch" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62591.877854922204!2d77.68213999747078!3d11.335267847602756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f453662e947%3A0x8c6f1f550a95b4b!2sSanjay&#39;s%20Fine%20Foods!5e0!3m2!1sen!2sin!4v1679411546683!5m2!1sen!2sin" />

      </figure>
    </div>
    <div class="card__body">
      <br/><br/>
      <h3 class="card__name">perundurai Branch</h3><br/>
      <p class="card__job" >Click To Know More</p>
      <p class="card__bio">9, 4, Mosikeernar St, near Royal Stage Krishna theatre, Backside, Erode, Tamil Nadu 638003</p>
    </div>
  </div>
</section>

{/* periyar nagar branch */}
<section class="wrapper1">
  <div class="card" data-effect="zoom">
 
    <figure  class="card__image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuN8lF3Ai5oJrSjCX8xtQC8G_38PlHfSlECQ&usqp=CAU" alt="Short description"/>
    </figure>
    <div class="card__header">
      <figure class="card__profile" style={{backgroundColor:"lightgray"}}>
      <iframe title="periyar branch" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62591.877854922204!2d77.68213999747078!3d11.335267847602756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f453662e947%3A0x8c6f1f550a95b4b!2sSanjay&#39;s%20Fine%20Foods!5e0!3m2!1sen!2sin!4v1679411546683!5m2!1sen!2sin" />

      </figure>
    </div>
    <div class="card__body">
      <br/><br/>
      <h3 class="card__name"> Branch</h3><br/>
      <p class="card__job" >Click To Know More</p>
      <p class="card__bio">9, 4, Mosikeernar St, near Royal Stage Krishna theatre, Backside, Erode, Tamil Nadu 638003</p>
    </div>
  </div>
</section>


</div>
<br/>
<br/>
{/* form */}
  <div className='contact'>
    <div className="contact-form">
      <form action="https://formspree.io/f/moqznlvq" method='post' className='contact-inputs'>
        <h3>For Any Queries</h3>
    <label>Name  :
       <input type="text" placeholder='username'
         name='username' 
        required 
        autoComplete='off' />
        </label>
        <label>  Email
        <input type="text" 
        name="email"
         placeholder='Email'
          required
           autoComplete='off'/>
          </label>
          Feedback
        <textarea name='message' 
        placeholder="Enter your message" 
         cols="30" rows="5"
          required 
         autoComplete='off' >
         </textarea>
        <input type="submit" value="submit" />
      </form>
    </div>
  </div>
  <br/>
  <br/>
<Footer/>
    </div>
    </div>
  )
}

export default Contact
