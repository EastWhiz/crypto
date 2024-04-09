import React from 'react';
import './timeline.css';
import Timeline01 from "../images/timeline-img.png";
import Timeline02 from "../images/verify-your-account.png";
import Timeline03 from "../images/easy-transation.png"

const Timeline = () => {
  return (
    <div>
    <section id="timeline">
    <div className='text-center'>
        <h1>Easy, Fast and Secure</h1>
        <h2 class="leader text-center">How it Works</h2>
    </div>
   <div class="demo-card-wrapper">
       <div class="demo-card demo-card--step1">
         
           <div class="body timeline-img">
               <img src={Timeline01} alt="Graphic" className="img-fluid"/>
           </div>
       </div>

       <div class="demo-card demo-card--step2">
           <div class="head">
               <div class="number-box">
                   <span>1</span>
               </div>
           </div>
           <div class="body">
             <h4>Easiest way to create an account</h4>
               <p>Lorem ipsum dolor sit amet consectetur. Id et nunc luctus condimentum viverra turpis sed scelerisque sit. Posuere amet tellus lectus duis lacus tortor bibendum.</p>
             
           </div>
       </div>

       <div class="demo-card demo-card--step3">
           <div class="head">
               <div class="number-box">
                   <span>2</span>
               </div>
           </div>
           <div class="body">
             <h4>Verify your account</h4>
               <p>Lorem ipsum dolor sit amet consectetur. Id et nunc luctus condimentum viverra turpis sed scelerisque sit.  lacus tortor bibendum.</p>
             
           </div>
       </div>

       <div class="demo-card demo-card--step4">
          
           <div class="body timeline-img time-line-left">
           <img src={Timeline02} alt="verify your account" className="img-fluid" />
           </div>
       </div>

       <div class="demo-card demo-card--step5">
          
           <div class="body timeline-img">
               <img src={Timeline03} alt="Graphic"  className="img-fluid"/>
           </div>
       </div>
       <div class="demo-card demo-card--step6">
           <div class="head">
               <div class="number-box">
                   <span>3</span>
               </div>
           </div>
           <div class="body">
             <h4>Verify your account</h4>
               <p>Lorem ipsum dolor sit amet consectetur. Id et nunc luctus condimentum viverra turpis sed scelerisque sit. Posuere amet tellus.</p>
             
           </div>
       </div>
   
   </div>
</section>
</div>
  )
}

export default Timeline
