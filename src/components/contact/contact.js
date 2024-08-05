import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false); // Added loading state
    const [error, setError] = useState(null); // Added error state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true

        emailjs.send(
            'service_7duvrth', // Service ID
            'template_optldbl', // Template ID
            {
                from_name: formState.name,
                message: formState.message,
                to_name: 'Abdel-Rhman', // Your name
                reply_to: formState.email,
            },
            'x-NHOFDn5Qf_goJ4_' // Public Key (User ID)
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            setFormState({
                name: '',
                email: '',
                message: '',
            });
            setLoading(false); // Set loading state to false
        })
        .catch((err) => {
            console.error('FAILED...', err);
            alert('Failed to send message, please try again.');
            setError(err.message || 'An unknown error occurred'); // Set error state
            setLoading(false); // Set loading state to false
        });
    };

    return (
        <div className="container">
            <h1 className="text-center">Contact</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control-1"
                        name="name"
                        placeholder="Name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        className="form-control-1"
                        name="email"
                        placeholder="Email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="message"
                        placeholder="Message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="btn-container">
                    <button type="submit" className="Sheko-1" disabled={loading}>
                        {loading ? 'Sending...' : 'Submit'}
                    </button>
                </div>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default Contact;
