import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import '../../css/App.css';
import '../../css/Queries.css';
import '../../css/bootstrap.min.css';
import { init, sendForm } from 'emailjs-com';
init(process.env.REACT_APP_INIT);

const Contact = () => {

    const [contactNumber, setContactNumber] = useState("000000");
    const [statusMessage, setStatusMessage] = useState("");

    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
    }

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => {
        const form = document.querySelector('#contact-form')
        const btn = document.querySelector('#send')
        const statusMessage = document.querySelector('.status-message');
        generateContactNumber();
        sendForm('default_service', process.env.REACT_APP_TEMP, '#contact-form')
            .then(function (res) {
                form.reset();
                btn.setAttribute('disabled', 'true')
                setStatusMessage("Message envoyé!");
                statusMessage.className = "status-message success";
                setTimeout(() => {
                    statusMessage.className = 'status-message'
                }, 5000);
            }, function (error) {
                setStatusMessage("Failed to send message! Please try again later.");
                statusMessage.className = "status-message failure";
                setTimeout(() => {
                    statusMessage.className = 'status-message'
                }, 5000)
            });
    }
    const message = watch('message') || "";
    const messageCharsLeft = 1500 - message.length;

    return (
        <div>

            <div id="contactSection">
                <div id="contact_title">
                    <h3>Me contacter</h3>
                </div>
            </div>

            <div id="contact">
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input type="hidden" name="contact_number" className="form-control" value={contactNumber} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Sujet</label>
                        <input type="text" name="subject" className="form-control" placeholder="Sujet" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Prénom</label>
                        <input type="text" name="user_name" className="form-control" placeholder="Prénom" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="user_email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea name="message" placeholder='Message' maxLength='1500' rows="5"
                            className="form-control" {...register('message', { required: 'Required' })}></textarea>
                        <p className='message-chars-left'>{messageCharsLeft}</p>
                    </div>
                    <input className="btn btn-success form-control" type="submit" value="Send" id="send" />
                    <p className='status-message'>{statusMessage}</p>
                </form>
            </div>
        </div>
    )
}

export default Contact;