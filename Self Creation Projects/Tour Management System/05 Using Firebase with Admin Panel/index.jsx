import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './src/App';
import { AuthProvider } from './src/store/AuthContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </ChakraProvider>
);