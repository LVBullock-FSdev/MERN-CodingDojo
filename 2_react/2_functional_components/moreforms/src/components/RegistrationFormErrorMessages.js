import React, { useState } from 'react';

const RegistrationFormErrorMessages = (props) =>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [formSubmitted, setformSubmitted] = useState( false );

    const submitUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confPassword };

        console.log("Welcome " + newUser);
        setformSubmitted( true );
    };

    const moduleStyle = {
        textAlign: "left",
        marginLeft: "500px",
        marginRight: "400px",
        paddingLeft: "15px",
        paddingBottom: "10px"
    };

    return(
    <div>
        <form onSubmit={ (e) => submitUser(e) }>
            {
                formSubmitted ?
                <h3>Thank you for submitting the form!</h3>:
                <h3>Welcome, please submit the form.</h3>
            }

                <div className="divider">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" value={ firstName } onChange={ (e) => setFirstName( e.target.value ) }/>

                    {
                        firstName.length > 0 && firstName.length < 2 ?
                        <p style={{backgroundColor: "yellow", color: "red"}}><strong>First Name must have at least 2 characters.</strong></p>
                        : null
                    }
                </div>

                <div className="divider">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" value={ lastName } onChange={ (e) => setLastName( e.target.value ) }/>
                    {
                        lastName.length > 0 && lastName.length < 2 ?
                        <p style={{backgroundColor: "yellow", color: "red"}}><strong>Last Name must have at least 2 characters.</strong></p>
                        : null
                    }
                </div>

                <div className="divider">
                    <label htmlFor="email">Email: </label>
                    <input type="email" value={ email } onChange={ (e) => setEmail( e.target.value ) }/>

                    {
                        email.length  > 0 && email.length < 5 ?
                        <p style={{backgroundColor: "yellow", color: "red"}}><strong>Email must have at least 5 characters.</strong></p>
                        : null
                    }
                </div>

                <div className="divider">
                    <label htmlFor="password">Password: </label>
                    <input type="text" value={ password } onChange={ (e) => setPassword( e.target.value ) }/>

                    {
                        password.length > 0 && password.length < 8 ?
                        <p style={{backgroundColor: "yellow", color: "red"}}><strong>Password must have at least 8 characters.</strong></p>
                        : null
                    }
                </div>

                <div className="divider">
                    <label htmlFor="confPassword">Confirm Password: </label>
                    <input type="text" value={ confPassword } onChange={ (e) => setConfPassword( e.target.value ) }/>

                    {
                        confPassword !== password ?
                        <p style={{backgroundColor: "yellow", color: "red"}}><strong>PASSWORDS DO NOT MATCH!</strong></p>
                        : null
                    }
                </div>

                <button type="submit" onSubmit={ (e) => setformSubmitted() }>Create User</button>
        </form>

        
        <h3>Your Form Data:</h3>

        <div style={ moduleStyle }>
            <p>First Name: &emsp;<strong>{ firstName }</strong></p>
            <p>Last Name: &emsp;<strong>{ lastName }</strong></p>
            <p>Email: &emsp;<strong>{ email }</strong></p>
            <p>Password: &emsp;<strong>{ password }</strong></p>
            <p>Confirm Password: &emsp;<strong>{ confPassword }</strong></p>
        </div>
    </div>
    );
}
export default RegistrationFormErrorMessages;