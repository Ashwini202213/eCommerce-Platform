import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, such as sending the email to a backend
    console.log('Subscribed email:', email);
    alert(`Thank you for subscribing!`);
    setEmail('');
  };

  return (
    <div className='newsletter'>
      <h1>Stay Updated to get Exclusive Offers !</h1>
      <p>Sign up for our newsletter and get the latest news and exclusive offers.</p>
      
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsLetter;
