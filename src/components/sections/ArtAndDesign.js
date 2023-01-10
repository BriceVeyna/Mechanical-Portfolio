import React from 'react';

const images = {
    image1: process.env.PUBLIC_URL + '/assets/images/Arroyo_Grande_Mural.jpg',
    image2: process.env.PUBLIC_URL + '/assets/images/Planetarium_Mural.jpg',
    image3: process.env.PUBLIC_URL + '/assets/images/VDS_Website.JPG'
}

const styles = {
    box: {
        margin: '0 20px 20px 20px',
        backgroundColor: 'PapayaWhip'
    },
    boxInner: {
        margin: '20px 35px 35px 35px',
        paddingTop: '20px',
        borderRadius: '12px',
        boxShadow: '2px 2px 20px grey',
        backgroundColor: 'Moccasin'
    },
    images: {
        maxHeight: '800px',
        maxWidth: '90%',
        margin: '20px',
        borderRadius: '25px',
        boxShadow: '2px 2px 10px'
    },
    paragraph: {
        maxWidth: '90%',
        marginLeft: '5%',
        paddingBottom: '15px'
    }
}

function ArtAndDesign() {
    return (
        <div id='art-and-design' className='border rounded shadow' style={styles.box}>
            <div className='text-center m-2'>
                <h1>Art & Design</h1>
            </div>
            <div className='text-center'>
                <div style={styles.boxInner}>
                    <h2>Murals</h2>
                    <img src={images.image1} alt='Arroyo Grande Mural' style={styles.images}></img>
                    <img src={images.image2} alt='Planetarium Mural' style={styles.images}></img>
                    <p style={styles.paragraph}>
                        Historical & Planetarium Murals - In the first picture (Santa Maria Times, 2014), I am applying the final protective sealer on this mural in Arroyo Grande, California that my mom and I had just finished painting. In the second (2015), I am finishing packing up after completing this mural in Visalia, California with my mom and one other artist. My mom is the primary artist for both, but I have been working with her and learning about design and dealing with clients since I was eight years old.
                    </p>
                </div>
                <div style={styles.boxInner}>
                    <h2>Web Development</h2>
                    <img src={images.image3} alt='Website Design in Progress' style={styles.images}></img>
                    <p style={styles.paragraph}>
                        Veyna Design Studios Website - This is a Figma redesign currently in progress (not a complete site plan) for the website of my art family business <span><a href='https://www.veynadesignstudios.com'>veynadesignstudios.com</a></span>. When complete it will be a full-stack MERN website, unlike this portfolio that is only a front-end hosted on GitHub out of convenience. It will include an online store, gallery of work, contact information, quote pricing information, and more.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ArtAndDesign;