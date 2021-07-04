import React from 'react'

function HomeForm() {
    return (
        <div className="home-form-wrapper">
            <form>
                <input type="text" placeholder="Username..." />
                <input type="Email" placeholder="Email..." />
                <input type="password" placeholder="Password..." />
                <input type="submit" value="Create Account" />
            </form>
        </div>
    )
}

export default HomeForm
