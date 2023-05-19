import { useState } from 'react';
import Swal from 'sweetalert2';

import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from "@mui/material";


import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    
    &> div {
        margin-top: 20px
        
    }
`
const AddButton = styled(Button)`
background : #000000;
color : #f73378

`


const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}


const AddUser = () => {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        
        setUser({...user, [e.target.name]: e.target.value})
        
    }

    const addUserDetails = async () => {
        await addUser(user);

       await Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Save Successfully!',
          })
        navigate('/all');

    }



    
    return(
       <Container>
        <Typography variant="h4" align="center" >Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange= {(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange= {(e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange= {(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange= {(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <AddButton variant="contained" onClick ={() => addUserDetails()}>Add User</AddButton>
            </FormControl>

       </Container>
    )
}

export default AddUser;