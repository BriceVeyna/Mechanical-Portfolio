import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a
                        href='#design-engineering'
                        className={currentPage === 'Design Engineering' ? 'nav-link active' : 'nav-link'}
                    >
                        Design Engineering
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href='#industrial-machining'
                        className={currentPage === 'Industrial Machining' ? 'nav-link active' : 'nav-link'}
                    >
                        Industrial Machining
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href='#product-development'
                        className={currentPage === 'Product Development' ? 'nav-link active' : 'nav-link'}
                    >
                        Product Development
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href='#art-and-design'
                        className={currentPage === 'Art & Design' ? 'nav-link active' : 'nav-link'}
                    >
                        Art & Design
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;