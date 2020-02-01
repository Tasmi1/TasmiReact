import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import {
  Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap'
import HeaderComponent from './HeaderComponent'

class LoginComponent extends React.Component{

      constructor(props) {
          super(props)
          this.state = {
              username: '',
              password: '',
              isLoggedIn: false
          }
      }
      handleChange = (e) => {
          this.setState(
              { [e.target.name]: e.target.value }
          )
      }
      submitForm = (e) => {
          e.preventDefault();
          axios.post('http://localhost:3000/users/login', this.state)
              .then((response) => {
                  console.log(response.data)
                  localStorage.setItem('token', response.data.token)
                  this.setState({ isLoggedIn: true })
                  

              }).catch((err) => console.log(err.response))
          this.setState({ username: '', password: '' })
      }
      render() {
  
          if (this.state.isLoggedIn === true) {
              return <Redirect to='/dashboard' />
          }
          return (
  
              <Container style={{marginTop:'100px'}}>
                  <HeaderComponent />
                  <h2>Sign In</h2>
                  <Form>
                      <Col>
                          <FormGroup >
                              <Label for='username'>Username</Label>
                              <Input type='text' name='username' id='username' value={this.state.username} onChange={this.handleChange} />
                          </FormGroup>
                      </Col>
                      <Col>
                          <FormGroup>
                              <Label for='password'>Password</Label>
                              <Input type='password' name='password' id='password' value={this.state.password} onChange={this.handleChange} />
                          </FormGroup>
                      </Col>
                      <Button color="primary" onClick={this.submitForm}  type="submit">Submit</Button>
                      <FormText>Not yet a user? <Link to='/register'> Sign Up here!</Link></FormText>
                  </Form>
              </Container>
          )
      }
  }
export default LoginComponent