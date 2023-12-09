import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <>
    <div className='contact'>
        <div className='container'>
            <div className='form'>
                <h2>#contact us</h2>
                <form method='POST'>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Name</h4>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Name' ></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>E-mail</h4>
                        </div>
                        <div className='input'>
                            <input type='email' placeholder='E-mail' ></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Subject</h4>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Subject' ></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Message</h4>
                        </div>
                        <div className='input'>
                            <textarea placeholder='Message !' ></textarea>
                        </div>
                    </div>
                    <button  >Send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact