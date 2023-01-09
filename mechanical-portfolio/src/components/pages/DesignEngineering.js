import React from 'react';

const styles = {
    box: {
        margin: '0 20px 20px 20px',
        backgroundColor: 'PapayaWhip'
    },
    paragraph: {
        padding: '0 35px 0 35px'
    }
}

function DesignEngineering() {
    return (
        <div id='design-engineering' className='border rounded shadow' style={styles.box}>
            <div className='text-center m-2'>
                <h1>Design Engineering</h1>
            </div>
            <div style={styles.paragraph}>
                <p>
                    Unfortunately, I can't show any photos from my work with Applied Engineering and my client company due to an NDA, but below is a small selection of other work and hobby projects that should give a fuller picture of who I am. One thing that I hope shows through is that I love learning new technologies and processes in a variety of domains and applying them in other domains. If you have any questions, please feel free to ask!
                </p>
            </div>
        </div>
    );
}

export default DesignEngineering;