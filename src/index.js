
import ReactDom from "react-dom";
import './index.css';
import React from 'react'
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import Section from './Components/Section'
const Index = () => {
    return (
        <>
            <Header></Header>
            <Section></Section>
            <Footer></Footer>

        </>
    )
}


ReactDom.render(<Index />, document.getElementById('root'));