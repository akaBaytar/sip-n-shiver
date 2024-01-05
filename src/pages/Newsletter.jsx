import { useState } from 'react';
import { Form } from 'react-router-dom';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const [firstname, setFirstame] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = () => {
    try {
      setFirstame('');
      setLastname('');
      setEmail('');
      toast.success('Your request has been successfully received.');
    } catch (error) {
      toast.error('An error occurred.');
    }
  };

  return (
    <Form className='form' onSubmit={submitHandler}>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>Newsletter</h4>
      <div className='form-row'>
        <label htmlFor='first-name' className='form-label'>
          First Name:
        </label>
        <input
          type='text'
          value={firstname}
          onChange={(e) => setFirstame(e.target.value)}
          name='first-name'
          id='first-name'
          className='form-input'
          autoComplete='given-name'
          required
        />
      </div>
      <div className='form-row'>
        <label htmlFor='last-name' className='form-label'>
          Last Name:
        </label>
        <input
          type='text'
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          name='last-name'
          id='last-name'
          className='form-input'
          autoComplete='family-name'
          required
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          E-mail:
        </label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          id='email'
          className='form-input'
          autoComplete='email'
          required
        />
      </div>
      <span style={{ fontSize: '0.7rem' }}>All fields must be filled out.</span>
      <button type='submit' className='button button-block' style={{ marginTop: '0.45rem' }}>
        Submit
      </button>
    </Form>
  );
};

export default Newsletter;
