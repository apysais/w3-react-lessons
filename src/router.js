import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';
import NoPage from './components/pages/NoPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/reactjs/webpack-demo-git-copilot/router.html" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);