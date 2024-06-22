import React from 'react';

const ForumSubmission = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Callback function
    onSubmit(e.target.elements);
  };

  return (
    <section id="forum" className="section">
      <h2 className="section-title">Forum Submission</h2>
      <p className="section-description">Share your local cricket news!</p>

      <form className="forum-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required /><br />
        <input type="email" name="email" placeholder="Your Email" required /><br />
        <textarea name="message" rows="5" placeholder="Your Message" required /><br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ForumSubmission;
