import React from 'react';

const images = {
    image1: process.env.PUBLIC_URL + '/assets/images/CNC_Router.JPG',
    image2: process.env.PUBLIC_URL + '/assets/images/MDF_Coaster.JPG',
    image3: process.env.PUBLIC_URL + '/assets/images/Plywood_Coaster.JPG',
    image4: process.env.PUBLIC_URL + '/assets/images/Concrete_Coasters.jpg',
    image5: process.env.PUBLIC_URL + '/assets/images/MDF_Wall_Hanging.JPG',
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
    }
}

function ProductDevelopment() {
    return (
        <div id='product-development' className='border rounded shadow' style={styles.box}>
            <div className='text-center m-2'>
                <h1>Product Development</h1>
            </div>
            <div className='d-flex flex-column justify-content-center'>
                <div style={styles.boxInner}>
                    <h2 className='text-center'>CNC Router Table</h2>
                    <div className='d-flex justify-content-center'>
                        <img src={images.image1} alt='CNC Router Table' style={styles.images}></img>
                    </div>
                </div>
                <div style={styles.boxInner}>
                    <h2 className='text-center'>Coasters</h2>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <img src={images.image2} alt='Prototype MDF Coaster' style={styles.images}></img>
                        <img src={images.image3} alt='Prototype Plywood Coaster' style={styles.images}></img>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src={images.image4} alt='Concrete Coasters' style={styles.images}></img>
                    </div>
                </div>
                <div style={styles.boxInner}>
                    <h2 className='text-center'>Wall Hangings</h2>
                    <div className='d-flex justify-content-center'>
                        <img src={images.image5} alt='Prototype MDF Wall Hanging' style={styles.images}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDevelopment;