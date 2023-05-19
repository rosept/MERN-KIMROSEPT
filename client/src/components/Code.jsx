import { textAlign } from "@mui/system";
import { styled, Divider } from '@mui/material';

const Container = styled(Divider)`
    border: 1px solid black;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgb(255, 255, 255), rgb(0,0,0));

`



const Code = () => {
    return(
        <Container >

       <h1 align="center" >Welcome to our Simple MERN CRUD APPLICATION!</h1>
       
       <h4> Created By: ROSEPT PARNES & KIMBERLY GUERGIO BSIT-3</h4>
       </Container>

    )
}


export default Code;