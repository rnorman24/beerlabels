import React from 'react';

const Form = props => (
  <form>
    <div className='form-group'>
      <label htmlFor='topic'>
        <strong>Beer Label Search Topic</strong>      
      </label>
      <input
        className='form-control'
        id='topic'
        value={props.q}
        placeholder='Enter Search Topic'
        name='q'
        onChange={props.handleInputChange}
        required
      />
    </div>
  </form>
)