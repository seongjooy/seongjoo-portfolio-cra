import React from 'react'
import "./Contact.css"
import model from '../../src/img/model.png'

const Contact = () => {
  return (
    <div className='c'>
        Contact
        <div className='c-bg'></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className='c-title'>
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                            src={model}
                            alt="" 
                            className="c-icon" />
                            +1 123 456 7890
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={model}
                            alt="" 
                            className="c-icon" />
                            email@google.com
                        </div>                       
                        <div className="c-info-item">
                            <img 
                            src={model}
                            alt="" 
                            className="c-icon" />
                            254 College St, Toronto.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className='"c-desc'>
                        <b>Description of the project </b>
                        Get in Touch
                    </p>
                    <form>
                        <input type="text" placeholder='Name' name='user_name'></input>
                        <input type="text" placeholder='Subject' name='user_subject'></input>
                        <input type="text" placeholder='Email' name='user_email'></input>
                        <textarea rows="5" placeholder="Message" name='message'></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Contact