import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Oops! The page you're looking for doesn't exist.</p>
            <Button as={Link} to="/ViewItems" variant="primary" size="lg">
                Go to Homepage
            </Button>
        </div>
    );
};

export default NotFound;
