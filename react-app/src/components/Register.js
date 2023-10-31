import React, { useState } from 'react'
import './Register.css';
import LoaderButton from "../components/LoaderButton";
import { onError } from "../lib/errorLib";
import Form from "react-bootstrap/Form";
//import {postcodeValidator} from "postcode-validator";
import { useAppContext } from "../lib/contextLib";

export default function Register() {

    const [isLoading, setIsLoading] = useState(false);
    const { userRegistered } = useAppContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role] = useState("ROLE_USER");
    const [enabled] = useState(true);
    

    function validateForm() {
        return name.length > 0 && username.length > 0 && password.length > 0 && String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    

    async function userRegister(user) {
        return fetch('http://localhost:8082/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
     .then(data =>  {
      if (data.ok) {
        return data.json();
      }
      throw new Error("Something went wrong");
    })
     .catch((error) => {
      console.log(error);
    });
    }

    async function handleSubmit(event) {
        event.preventDefault();
    
        setIsLoading(true);
    
        try {
            //const res = await userRegister({name, email, username, password, role, enabled});
            userRegistered(true);
        }   catch (e) {
            onError(e);
            setIsLoading(false);
        }
      }

      // const handleChange = (e) => {
      //   e.persist();
      //   setTolerance(e.target.value)
      //   console.log(e.target.value);
      // }

      

  return (
    <div className="Login">
      <h1 style={{textAlign: "center", paddingBottom: "25px"}}>User Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name" style={{paddingBottom: "10px"}}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email" style={{paddingBottom: "10px"}}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="username" style={{paddingBottom: "10px"}}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" style={{paddingBottom: "10px"}}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        

        <LoaderButton
            block="true"
            size="lg"
            type="submit"
            isLoading={isLoading}
            disabled={!validateForm()}
        >
            Register
        </LoaderButton>
      </Form>
    </div>
  )
}

