import { useState, useEffect } from 'react';
// import axios from 'axios';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';



export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState(null);

    const { doRequest, errors } = useRequest({
        url: '/api/users/signup',
        method: 'post',
        body: {
            email,
            password
        },
        onSuccess: () => Router.push('/')
    });

    const onSubmit = async event => {
        event.preventDefault();
        
        // try {
        //     const response = await axios.post('/api/users/signup', {
        //         email,password
        //     });
        //     console.log(response.data)
        // } catch (err) {
        //     // console.log(error)
        //     setErrors(
        //         <div className="alert alert-danger">
        //             <h4>Ooops....</h4>
        //             <ul className="my-0">
        //                 {err.response.data.errors.map(err => (
        //                 <li key={err.message}>{err.message}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //     );
        // }

        // Router.push('/')

        await doRequest();

    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label>Email Address</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                />
            </div>
            {errors}
            <button className="btn btn-primary">Sign Up</button>
        </form>
    );
};