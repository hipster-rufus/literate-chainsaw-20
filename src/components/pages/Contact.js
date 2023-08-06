import React from 'react';
import '../../styles/Card.css';

export default function Contact() {
  return (
    <div className='card'>
      <h1 className='text-center'>Contact</h1>
      <form>
        <div class="mb-3">
          <label for="inputName" class="form-label">Name</label>
          <input type="text" class="form-control" id="inputName" required />
        </div>
        <div class="mb-3">
          <label for="inputEmail" class="form-label">Email Address</label>
          <input type="email" class="form-control" id="inputEmail" required />
        </div>
        <div class="mb-3">
          <label for="inputMsg" class="form-label">Message</label>
          <textarea rows="5" cols="32" type="textarea" class="form-control" id="inputMsg" required />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
