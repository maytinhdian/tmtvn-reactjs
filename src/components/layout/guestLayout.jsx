import { Container } from '@mui/material';
import { Component } from 'react';

class guestLayout extends Component {
    render() {
        return (
            <Container maxWidth="xl" sx={{bgcolor:"yellowgreen"}} fixed>
                <h1>Guest Layout</h1>
            </Container>
        );
    }
}

export default guestLayout;