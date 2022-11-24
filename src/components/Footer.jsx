import React from 'react';

const Footer = () => {
    const getDate = new Date()
    const getYear = getDate.getFullYear();
    return <footer>
        <p>Copyright &copy; { getYear }</p>
    </footer>
}

export default Footer;