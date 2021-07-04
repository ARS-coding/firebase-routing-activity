import React, { useState } from 'react'

function HomeForm() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    return (
        <div className="home-form-wrapper">
            <form>
                <input 
                    type="text"
                    name="username"
                    onChange={handleChange} 
                    value={formData.username} 
                    placeholder="Username..."
                />
                <input 
                    type="Email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email..."
                />
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange}
                    value={formData.password}
                    placeholder="Password..." 
                />
                <input
                    type="submit"
                    onChange={handleChange}
                    value="Create Account"
                />
            </form>
        </div>
    )
}

export default HomeForm
