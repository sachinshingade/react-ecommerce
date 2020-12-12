import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const adminEmail = 'admin@xyz.com';
    const adminPass = 'Admin_007';
    function disablebutton() {
        
        return email.length > 0 && password.length > 0;
    }

    function validateForm() {
        const emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const passregex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!_%*#?&])[A-Za-z\d@$!_%*#?&]{8,}$/
        // console.log(emailregex.test(email));
        if(emailregex.test(email) && passregex.test(password)){
            return true;
        } else if(!emailregex.test(email)){
            alert('Invalid mail')
        } else if(!passregex.test(password)) {
            alert('Password should contain atleast one number and one special character')
        }
    }
  
    function handleSubmit(event) {
        event.preventDefault();
        if(validateForm()){
            if(email == adminEmail){
              if(adminPass !== password){
                alert("Invalid Password")
                return 
              } else {
                console.log('admin logged in')
                history.push(`/dashboard`)
                sessionStorage.setItem('Admin',email)
              }
            } else {
              console.log('User logged in')
              history.push(`/products`)
              sessionStorage.setItem('User',email)
            }
        }
        
    }
  
    return (
      <div className="Login">
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!disablebutton()}>
            Login
          </Button>
        </Form>
      </div>
    );
  }