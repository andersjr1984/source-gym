import React, {useState, Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import './LogIn.css';
import { Form, Button, ButtonToolbar } from 'react-bootstrap';

import { GoogleAuthButton } from './GoogleButton/GoogleAuthButton';

import './LogIn.css'

export const LogIn = () => {
  const [redirect, setRedirect]=useState(false);

  if (redirect) {
    return <Redirect to="/" />
  } else {
    return (
    <div className="log-in">
      <EmailPassAuth setRedirect={setRedirect}/>
      <SocialAuth setRedirect={setRedirect}/>
    </div>)
  }
}

const SocialAuth = (props) => {
  return (
    <ButtonToolbar>
      <GoogleAuthButton 
        setRedirect={props.setRedirect}
      />
    </ButtonToolbar>
  )
}

const EmailPassAuth = (props) => {
  const [email, setEmail]=useState('');
  const [password, setPass]=useState('');
  const [message, setMessage]=useState(undefined);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newOrExisting = event.target.id;
    if (newOrExisting === "new") {
      try {
        //await firebase.auth().createUserWithEmailAndPassword(email, password);
        return props.setRedirect(true);
      }
      catch (error) {
        console.error(error);
        setMessage(error.message);
      }
    }
    else if (newOrExisting==="existing") {
      try {
        //await firebase.auth().signInWithEmailAndPassword(email, password);
      }
      catch (error) {
        console.error(error);
        setMessage(error.message);
      }
    } else {
      setMessage("An unknown error has occurred. Please contact administrator if this continues.");
    }
  }

  return (
    <Fragment>
      <h3>Log-in Options:</h3>
      {message && <h5>{message}</h5>}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label><i className="fas fa-at"></i></Form.Label>
          <Form.Control 
            autoComplete="email" 
            type="email" 
            placeholder="Enter email" 
            value={email} 
            name="email" 
            onChange={(event) => setEmail(event.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label><i className="fas fa-lock"></i></Form.Label>
          <Form.Control 
            type="password" 
            autoComplete='current-password' 
            placeholder="Password" 
            value={password} 
            name="password" 
            onChange={(event) => setPass(event.target.value)} />
        </Form.Group>
        <ButtonToolbar>
          <Button 
            variant="outline-success" 
            size="sm" 
            id="existing"
            onClick={(event)=>handleSubmit(event)}
          >
            Sign In
          </Button>
          <Button 
            variant="outline-success" 
            size="sm" 
            id="new" 
            onClick={(event)=>handleSubmit(event)}
          >
            Create
          </Button>
        </ButtonToolbar>
      </Form>
    </Fragment>
  )
}