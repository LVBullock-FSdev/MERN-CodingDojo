import React, { useState } from 'react';

const RegistrationFormHooks = (props) =>{
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState(props.password);
    const [confPassword, setConfPassword] = useState(props.confPassword);

    // const onChangeHandler = (event) =>{
    //     setFirstName( { firstName } );
    //     setLastName( { lastName } );
    //     setEmail( { email } );
    //     setPassword( { password } );
    //     setConfPassword( { confPassword } );

    // };

    const moduleStyle = {
        textAlign: "left",
        marginLeft: "500px",
        marginRight: "400px",
        paddingLeft: "15px",
        paddingBottom: "10px"
    };

    return(


    <div>
        <div className="divider">
            <label htmlFor="firstName">First Name: </label>
            <input
                type="text"
                value={ firstName }
                onChange={ (event) => setFirstName( event.target.value ) }/>

        </div>

        <div className="divider">
        <label htmlFor="lastName">Last Name: </label>
        <input
            type="text"
            value={ lastName }
            onChange={ (event) => setLastName( event.target.value ) }/>
        </div>

        <div className="divider">
        <label htmlFor="email">Email: </label>
        <input
            type="email"
            value={ email }
            onChange={ (event) => setEmail( event.target.value ) }/>
        </div>

        <div className="divider">
        <label htmlFor="password">Password: </label>
        <input
            type="text"
            value={ password }
            onChange={ (event) => setPassword( event.target.value ) }/>
        </div>


        <div className="divider">
        <label htmlFor="text">Confirm Password: </label>
        <input
            type="text"
            value={ confPassword }
            onChange={ (event) => setConfPassword( event.target.value ) }/>
        </div>

        <br></br>

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
export default RegistrationFormHooks;