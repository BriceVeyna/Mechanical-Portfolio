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
    }
}

function IndustrialMachining() {
    return (
        <div id='industrial-machining' className='border rounded shadow' style={styles.box}>
            <div className='text-center m-2'>
                <h1>Industrial Machining</h1>
            </div>
            <div className='d-flex flex-wrap justify-content-center' style={styles.boxInner}>
                <img src={images.image6} alt='Machined Lever Arm' style={styles.images}></img>
                <img src={images.image7} alt='Machined Locator Pins' style={styles.images}></img>
            </div>
        </div>
    );
}

export default IndustrialMachining;