import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage';
import CustomThemeProvider from './components/CustomThemeProvider'

function App() {
    return (
        <ReduxProvider store={ store }>
            <BrowserRouter>
                <CustomThemeProvider>
                    <Routes>
                        <Route path="/" element={ <SigninPage /> } />
                        <Route path="register" element={ <RegisterPage /> } />
                        <Route path="profile" element={ <ProfilePage /> } />
                        <Route path='home' element={ <HomePage /> } />
                    </Routes>
                </CustomThemeProvider>
            </BrowserRouter>
        </ReduxProvider>
    )
}

export default App