import React, { useState, useEffect } from 'react';
import { fetch } from '../../common/service/service';

// const login = React.memo(props =>{
    const Login = (props) =>{
    const [ username, setUsername] = useState('');
    const [ password, setPassword ] = useState('');
    const [ result, setResult ] = useState('')

    useEffect( ()=>{
        // .then( (response) =>{
        //     console.log('+++++++++++')
        //     const data = {result: response}
        //     setResult(response)
        //     console.log(result)
        // })
        // .catch( (e)=>{
        //     console.log('ERRORRRRRRRRRRRR' + e)
        // });

    },[]);

    const onChange = (e) =>{
        console.log(e);
        const { value, name } = e.currentTarget
        if(name === 'username'){
            setUsername(value);
        } else if( name === 'password' ){
            setPassword(value);
        }
    }
    const onHandleLogin = async (e) =>{
        e.preventDefault();
        
        const param = {
            url: 'login',
            method: 'POST',
            data: { username: username, password: password },
        } 
        const resultData = await fetch(param)
    }

    return(
        <div className="login">
            <p className="login__sign" align="center">Sign in</p>
            <form className="login__form" onSubmit={onHandleLogin}>
                <input className="login__input" type="text" name="username" align="center" placeholder="Username" onChange={onChange} />
                <input className="login__input" type="password" name="password" align="center" placeholder="Password" onChange={onChange} />
                <button type="submit" className="login__button">Login</button>
                <p className="login__forgot" align="center"><a href="#">Forgot Password?</a></p>
            </form>
        </div>                  
    )
// });
    }

export default Login;