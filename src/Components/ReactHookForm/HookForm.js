import React from 'react'
import './HookForm.css'; // Adjust the path if needed
import { useForm } from 'react-hook-form';
// import { data } from 'react-router-dom';

const HookForm = () => {
   
   const {register, handleSubmit, formState: {errors} } = useForm({
    defaultValues:{
      fname: 'Bala',
      lname: 'vikin'
    }
   });

  return (
    <div>HookForm
      <div className='Form'>
        <div className='title'>
            Signup
        </div>
        <div className='inputs'>
          <form onSubmit={handleSubmit((data)=> {
             console.log(data);
          })}>
            <input {...register('fname',{required: 'first name is required'})}
            type='text' placeholder='First Name'/>
            {errors?.fname && <p>{errors.fname.message}</p>}

            <input {...register('lname',{required: 'last name is required',minLength:{ value: 4, message :"Minimum 4 char excepted"}})}
            type='text' placeholder='Last Name'/>
            {errors?.lname && <p>{errors.lname.message}</p>}
             

            <input type='submit' id='submit'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HookForm;
