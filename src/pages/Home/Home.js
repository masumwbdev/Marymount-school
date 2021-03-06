import React from 'react';
import Downloads from '../../components/Downloads/Downloads';
import Eservices from '../../components/Eservices/Eservices';
import GoldenJubilee from '../../components/GoldenJubilee/GoldenJubilee';
import HeadTeacher from '../../components/HeadTeacher/HeadTeacher';
import Links from '../../components/Links/Links';
import Notice from '../../components/Notice/Notice';
import WebMaster from '../../components/WebMaster/WebMaster';
import Banner from '../../shared/Banner/Banner';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <div className="home-container pt-5">
                <div className='layout d-lg-flex justify-content-between width-control'>
                    <div className='first-layout'>
                        <GoldenJubilee />
                        <Notice />
                        <Downloads />
                    </div>
                    <div className='second-layout'>
                        <HeadTeacher />
                        <Eservices />
                        <Links />
                        <WebMaster />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;