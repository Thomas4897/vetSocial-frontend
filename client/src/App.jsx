import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CustomThemeProvider from './components/CustomThemeProvider'

function App() {
    return (
        <BrowserRouter>
            <CustomThemeProvider>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                </Routes>
            </CustomThemeProvider>
        </BrowserRouter>
    )
}

export default App