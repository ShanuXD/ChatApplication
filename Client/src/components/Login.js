import React,{useRef} from 'react'
import {Container,Form, Button} from 'react-bootstrap'
import {v4 as uuidV4} from 'uuid'
function Login(props) {

    const idRef=useRef()

    function handelSubmit(event){
        event.preventDefault()
        props.onIdSubmit(idRef.current.value)
    }
    function createNewId(){
        props.onIdSubmit(uuidV4())
    }
    
    return (
        <Container className='align-items-center d-flex' style={{height:'100vh'}}>
        <Form onSubmit={handelSubmit} className='w-100'>
            <Form.Group>
            <Form.Label>Enter Your Id</Form.Label>
            <Form.Control type='text' ref={idRef} required></Form.Control>
            </Form.Group>
            <Button className='mr-2' type='submit'>Login</Button>
            <Button onClick={createNewId} variant='secondary'>Creat A New Id</Button>
        </Form> 
        </Container>
    )
}

export default Login