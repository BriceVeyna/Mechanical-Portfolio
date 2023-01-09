import React from 'react';

const styles = {
    card: {
        position: 'relative',
        bottom: '0',
        width: '100%',
        background: "#142121",
        color: "antiqueWhite",
        textAlign: 'center'
    },
    link: {
        filter: 'invert(100%) brightness(200%)'
    },
    links: {
        filter: 'invert(10%)'
    }
};

function Footer() {
    return (
        <footer className='p-3' style={styles.card}>
            <div className='pb-4' style={styles.links}>
                <a href={'https://www.linkedin.com/in/brice-veyna/'} className='p-4'><img src='https://upload.wikimedia.org/wikipedia/commons/7/76/Font_Awesome_5_brands_linkedin.svg' alt='LinkedIn' height={55} style={styles.link}></img></a>
            </div>
            <h6>&copy; 2023 Brice Veyna</h6>
        </footer>
    );
}

export default Footer;