import React, { Component } from 'react'
import Navigation from './Navigation'
import Axios from 'axios'
import { Form, FormGroup, Input, Button, Label, CustomInput, Container } from 'reactstrap'
import FileUploadButton from '../components/FileuploadButton'

export default class UserProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: null,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
            selectedFile: null,
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/users/me', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data
                })
            });
    }

    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('myFile', this.state.selectedFile)
        Axios.post('http://localhost:3000/upload', data, this.state.config)
            .then((response) => {
                this.setState({
                    user: { ...this.state.user, image: response.data.filename }
                })
            }).catch((err) => console.log(err.response))
    }

    updateUser = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3000/users/me', this.state.user, this.state.config)
            .then((response) => console.log(response.data)).catch((err) => console.log(err.response))
        this.props.history.push('/dashboard');
    }

    handleChange(e) {
        this.setState({
            user: { ...this.state.user, [e.target.name]: e.target.value }
        })
    }

    render() {
        if (this.state.user === null) {
            return <h3>Loading ...</h3>
        } else {
            return (
                <div>
                    <Navigation />
                    <Container className='mt-4'>
                        <Form>
                            <FormGroup>
                                <Label for='fname'>Full Name</Label>
                                <Input type='text'
                                    id="fname"
                                    name='fname'
                                    value={this.state.user.fname}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='address'>Address</Label>
                                <Input type='text' id='address'
                                    name='address'
                                    value={this.state.user.address}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='age'>Age</Label>
                                <Input type='text' id='age'
                                    name='age'
                                    value={this.state.user.age}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='age'>Age</Label>
                                <Input type='text' id='age'
                                    name='age'
                                    value={this.state.user.age}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='gender'>Gender</Label>
                                <Input type='text' id='gender'
                                    name='gender'
                                    value={this.state.user.gender}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='phonenumber'>Phonenumber</Label>
                                <Input type='text' id='phonenumber'
                                    name='phonenumber'
                                    value={this.state.user.phonenumber}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='username'>UserName</Label>
                                <Input type='text' id='username'
                                    name='username'
                                    value={this.state.user.username}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password</Label>
                                <Input type='text' id='password'
                                    name='password'
                                    value={this.state.user.password}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <img className='img-thumbnail'
                                    width='400' src={`http://localhost:3000/uploads/${this.state.user.image}`}
                                    alt="profile" />
                                <CustomInput type='file' id='profilePic'
                                    onChange={this.handleFileSelect} />
                                {this.state.selectedFile ? (<FileUploadButton
                                    uploadFile={this.uploadFile} />) : null}
                            </FormGroup>
                            <Button color='danger' onClick={this.updateUser} block>Update User</Button>
                        </Form>
                    </Container>
                </div>
                
            )
        }
    }
}
