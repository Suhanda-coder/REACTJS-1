import React, {Component} from 'react';
import '../style/styles.css'

class App extends Component{
    render(){
        return(
                <div className="wrapper">
                    <div className="header">
                        <div className="navbar">
                            <div className="logo">
                                <img className="imgfluid" src={require('../logo/babastudio-logo.png')}/>
                            </div>
                                <div className="menu">
                                    <ul>
                                    <li><a>Home</a></li>
                                    <li><a>Blogs</a></li>
                                    <li><a>Gallery</a></li>
                                    <li><a>Kontak</a></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                    {/*end header*/}
                    <div className="slider">
                        <div className="slidercontent">
                            <img className="imageslider" src={require('../image/banner-desktop.jpg')}/>

                        </div>
                    </div>
                
                    {/*slider*/}
                    <h2 className="dataprestasi">Prestasi murid babastudio</h2>
                    <div className="content">

                        <div className="content-gambar">
                            <div className="image">
                                <img className="imagesliderr" src={require('../image/21cineplex.jpg')}/>
                                <div className="contentimage">
                                <h2 className="fontimage">www.21cineplexx</h2>
                                </div>
                            </div>
                            <div className="image">
                                <img className="imagesliderr" src={require('../image/bpn.jpg')}/>
                                <div className="contentimage">
                                <h2 className="fontimage">www.bpn.go.id</h2>
                                </div>
                            </div>
                            <div className="image">
                                <img className="imagesliderr" src={require('../image/republika.jpg')}/>
                                <div className="contentimage">
                                <h2 className="fontimage">www.republika.co.id</h2>
                                </div>
                            </div>
                        </div>
                        {/*end cgambar*/}
                        <div className="content-gambar">
                            <h2 className="dataprestasi">Tempat kursus babastudio</h2>
                            <div className="content-yutube">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/M5AMAJmMgOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="content-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126918.2518318441!2d106.5597661582031!3d-6.237960999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbf617855555%3A0x499c259b6b3d813a!2sKampus%20Babastudio%20-%20Tangerang.%20Kursus%20web%2C%20SEO%2C%20Internet%20marketing!5e0!3m2!1sid!2sid!4v1575955212076!5m2!1sid!2sid" width="550" height="300" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                        </div>
                    </div>
                   
                </div>
        )
    }
}
export default App;
