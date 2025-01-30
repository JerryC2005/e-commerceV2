import { useState } from "react"

const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default function Contact() {
    // state to hold form data
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        phone: '',
        email: '',
        comment: '',
    });

    // state to hold validation errors
    const [errors, setErrors] = useState({})

    // Function to handle input changes
    function handleChange(e) {
        // destructures name and value of target
        const { name, value } = e.target;
        setFormData({
            ...formData, // sreads existiing form data
            [name]: value, //upd specified field w/ new val
        })
    }

    function valid() {
        const newErrors = {}; //obj to store errors

        // checks for req field and adds error msgs
        if(!formData.fname){
            newErrors.fname = 'First name is required'
        }

        if(!formData.lname){
            newErrors.lname = 'Last name is required'
        }

        if(!formData.phone){
            newErrors.phone = 'Phone is required'
        } else if(!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'invalid phone Format'
        }

        if(!formData.email){
            newErrors.email = 'Email is required'
        } else if(!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email Format'
        }

        if(!formData.comment){
            newErrors.comment = 'Comment is required'
        }

        return newErrors; //return the error object
    }

    // function to handle form submission
    function handleSubmit(e){
        e.preventDefault(); 
        
        // validate form inputs
        const validErrors = valid();

        if(Object.keys(validErrors).length > 0) {
            setErrors(validErrors)
        } else {
            // clear the form fields
            setFormData({
                fname: '',
                lname: '',
                phone: '',
                email: '',
                comment: '',
            })
            // clears errors
            setErrors({})
            alert('Form submitted successfully')
        }

    }

    return (
        <>
        <div className="form-container container">
        <form id="form" onSubmit={handleSubmit}>
          
          <h2>Contact me!</h2>
            <span className="error-message" id="fname-error">{errors.fname}</span>
            <label htmlFor="fname">First Name: </label>
            <input type="text" name="fname" id="fname" placeholder="Enter your first name"
            value={formData.fname}
            onChange={handleChange}
            />

            <span className="error-message" id="lname-error">{errors.lname}</span>
            <label htmlFor="lname">Last Name: </label>
            <input type="text" name="lname" id="lname" placeholder="Enter your last name" 
            value={formData.lname}
            onChange={handleChange} // upd state on change
            />
            
            <span className="error-message" id="phone-error">{errors.phone}</span>
            <label htmlFor="phone">Phone Number: </label>
            <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" 
            value={formData.phone}
            onChange={handleChange}
            />
            
            <span className="error-message" id="email-error">{errors.email}</span>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            />
            
            <span className="error-message" id="comment-error">{errors.comment}</span>
            <label htmlFor="comment">Comment: </label>
            <textarea cols="100" rows="10" type="comment" name="comment" id="comment" placeholder="The One Piece is REEEAAAL!!!!" 
            value={formData.comment}
            onChange={handleChange}
            ></textarea>
    
            <input type="submit" value="Submit"/>
            
            </form>
        </div>
        </>
    )
}