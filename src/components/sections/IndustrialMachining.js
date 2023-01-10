import React from 'react';

const images = {
    image6: process.env.PUBLIC_URL + '/assets/images/Lever_Arm.JPG',
    image7: process.env.PUBLIC_URL + '/assets/images/Locator_Pins.JPG'
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
        maxHeight: '600px',
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

function IndustrialMachining() {
    return (
        <div id='industrial-machining' className='border rounded shadow' style={styles.box}>
            <div className='text-center m-2'>
                <h1>Industrial Machining</h1>
            </div>
            <div style={styles.boxInner}>
                <h2 className='text-center'>CNC Milling</h2>
                <div className='d-flex flex-wrap justify-content-center'>
                    <img src={images.image6} alt='Machined Lever Arm' style={styles.images}></img>
                    <img src={images.image7} alt='Machined Locator Pins' style={styles.images}></img>
                </div>
                <div className='text-center'>
                    <p style={styles.paragraph}>
                        Lever Arm & Locator Pins - The first picture shows one of the more challenging large single-piece organic forms I've machined (and have photos of). It required many operations to complete, including an inclined wire EDM cut out along the central plane of the head afterwards (not pictured). The second picture shows some of the smallest parts I made while working at the machine shop.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default IndustrialMachining;