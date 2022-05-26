import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div className="CreateAccount">
            <div className="CreateAccount-container">
                <h1 className="tittle">My account</h1>
                <form action="/" className="form">
                    <div>
                        <label for="name" className="label">Name</label>
                        <input type="texto" id="name" placeholder="Amparo Yahoo" className="input input-name" />
                        <label for="email" className="label">Email address</label>
                        <input type="texto" id="email" placeholder="Amparoyahoo@gmail.com" className="input input-email" />
                        <label for="password" className="label">Password</label>
                        <input type="password" id="password" placeholder="*********" className="input input-password" />
                    </div>
                    <input type="submit" value="Edit" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;