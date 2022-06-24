import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import CustomThemeProvider from './components/CustomThemeProvider'

function App() {
    return (
        <BrowserRouter>
            <CustomThemeProvider>
                <Routes>
                    <Route path="/" element={ <SigninPage /> } />
                    <Route path="register" element={ <RegisterPage /> } />
                </Routes>
            </CustomThemeProvider>
        </BrowserRouter>
    )
}

export default App