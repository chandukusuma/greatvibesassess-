import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const initialdata = {username:"",  name: "", email: "", mobile: "", country:"", city:"", state:"" };

  const [formdata, setFormdata] = useState(initialdata);
  const [error, setErrors] = useState({});
  const [didSubmit, setDidSubmit] = useState(false);

  function handleChange(e){
    
    const {name, value} = e.target;
    setFormdata({...formdata, [name]:value});
    console.log(formdata)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(formdata));
    setDidSubmit(true);
  }

  useEffect(() => {
    console.log(error)
    if(Object.keys(error).length === 0 && didSubmit){
      console.log(formdata)
    }
  }, [error])

  const validation = (values) =>{
    const errors = {};
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.username){
      errors.username = "Username is required"
    }

    if(!values.name) {
      errors.name = "Username is required"
    }
    if(!values.email) {
      errors.email = "Email is required"
    }
    else if(!reg.test(values.email)){
      errors.email = "Please enter a valid email"
    }

    if(!values.mobile) {
      errors.mobile = "mobile number  is required"
    }
    else if(values.mobile.length < 10){
      errors.mobile = "Mobile num must be 10 digits"
    }
    else if(values.mobile.length > 10){
      errors.mobile = "Password should not exceed more than 10 characters"
    }

    if(!values.country){
      errors.country = "country name is required"
    }
    if(!values.city){
      errors.city = "city name is required"
    }
    if(!values.state){
      errors.state = "state name is required"
    }

    return errors
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registration form</h1>
        <div className='divideer'></div>
        <div className='form'>
        <div className='field'>
            <label className='label'>username</label>
            <input type="text" name='username' placeholder='Username' value={formdata.username} onChange={handleChange} />
          </div>
          <p className='error'>{error.username}</p>
          <div className='field'>
            <label className='label1'>name</label>
            <input type="text" name='name' placeholder='name' value={formdata.name} onChange={handleChange} />
          </div>
          <p className='error'>{error.name}</p>
          <div className='field'>
            <label className='labell'>Email</label>
            <input type="email" name='email' placeholder='Email' value={formdata.email} onChange={handleChange} />
          </div>
          <p  className='error'>{error.email}</p>
          <div className='field'>
            <label className='label2'>mobile</label>
            <input type="Number" name='mobile' placeholder='Mobile' value={formdata.mobile} onChange={handleChange} />
          </div>
          <p className='error'>{error.mobile}</p>
          <div className='field'>
            <label className='label3'>country</label>
            <input type="text" name='country' placeholder='Country' value={formdata.country} onChange={handleChange} />
          </div>
          <p className='error'>{error.country}</p>
          <div className='field'>
            <label className='label4'>city</label>
            <input type="text" name='city' placeholder='City' value={formdata.city} onChange={handleChange} />
          </div>
          <p className='error'>{error.city}</p>
          <div className='field'>
            <label className='label5'>state</label>
            <input type="text" name='state' placeholder='state' value={formdata.state} onChange={handleChange} />
          </div>
          <p className='error'>{error.state}</p>
          <button className='fluidbutton'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
