import React from 'react'

const Result = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_BASE_URL;
    



    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", apiKey);

        const response = await fetch(apiUrl, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email sent Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required />
                <label>Write your messages here</label>
                <textarea name='message' rows='6' placeholder='Ënter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Sent message
                    <ion-icon name="navigate"></ion-icon>
                    {/* <img src={white_arrow} alt='' /> */}
                </button>
            </form>
            <span>
                {result}
            </span>
        </div>
    )
}

export default Result
