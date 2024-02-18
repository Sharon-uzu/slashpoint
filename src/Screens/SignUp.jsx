import React from 'react'
import '../App.css';
import { Logo } from '../Components/logo';
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineKey } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineLocationMarker} from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import man from '../Assets/young.png'
import { Link } from 'react-router-dom';





const SignUp = () => {

    const navigate = useNavigate();

    const signup = () => {
        navigate('/')
      }


  return (
    <>
        <Header/>

        
        <section className='form-c'>

           <div className='f-l'>
            <img src={man} alt="" />

           </div>

           <div className='f-r'>
            <h3>Hello There!</h3>
            <p>Fill the form to create an account with us</p>

            <form className='form'>
              <div>
                <input type="text" placeholder='First Name'/>
              </div>

              <div>
                <input type="email" placeholder='Your Email Address' />
              </div>

              <div>
                <input type="tel" placeholder='Phone Number'/>
              </div>

              <div>
                <input type="text" placeholder='Address' />
              </div>
              
              <div>
                <input type="password" placeholder='Set a password' />
              </div>
              
              

              {/* <div>
                <select name="" id="">
                  <option value="">Choose course</option>
                  <option value="Frontend">Frontend Development</option>
                  <option value="Backend">Backend Development</option>
                  <option value="product">Product Design</option>
                </select>
              </div>
               */}
              <div>
                <input type="file" name="" id="" />
              </div>

              <button type="submit" onClick={signup}>Submit</button>
              <p className='switch'>Already have an account? <Link to='/'>Login</Link></p>

            </form>
           </div>

        </section>
    </>
  )
}

export default SignUp