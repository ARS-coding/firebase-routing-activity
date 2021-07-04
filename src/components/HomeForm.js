import React from 'react'

function HomeForm({ formData, handleFormSubmit, handleFormChange }) {

    return (
        <div className="home-form-wrapper">
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text"
                    name="username"
                    onChange={handleFormChange} 
                    value={formData.username} 
                    placeholder="Username..."
                />
                <input 
                    type="Email"
                    name="email"
                    onChange={handleFormChange}
                    value={formData.email}
                    placeholder="Email..."
                />
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleFormChange}
                    value={formData.password}
                    placeholder="Password..." 
                />
                <input
                    type="submit"
                    value="Create Account"
                />
            </form>
        </div>
    )
}

export default HomeForm
