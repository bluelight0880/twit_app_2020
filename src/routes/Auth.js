import React, { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        //event 안에 있는 target의 name과 value를 받는다.
        const {target: {name, value}} = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange}/>
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                <input type="submit" value="Log in" />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
}
export default Auth;