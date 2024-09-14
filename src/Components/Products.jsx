import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop, faClock, faTabletAlt, faGamepad, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

const OptionsPage = () => {
    const options = [
        { name: 'Mobiles', link: '/mobiles', color: '#FF6F61', icon: faMobileAlt },
        { name: 'Laptops', link: '/laptops', color: '#6A0572', icon: faLaptop },
        { name: 'Smart Watches', link: '/smart-watches', color: '#FFA500', icon: faClock },
        { name: 'Tablets', link: '/tablets', color: '#007ACC', icon: faTabletAlt },
        { name: 'Gaming PC', link: '/gaming-pc', color: '#28A745', icon: faGamepad },
    ];

    return (
        <div style={styles.container}>
            {options.map((option, index) => (
                <Link // Use Link instead of a
                    key={index} 
                    to={option.link} 
                    style={{ ...styles.option, backgroundColor: option.color }}
                >
                    <span style={styles.icon}>
                        <FontAwesomeIcon icon={option.icon} />
                    </span>
                    <span style={styles.text}>{option.name}</span>
                    <span style={styles.arrow}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                </Link>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
    },
    option: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        maxWidth: '900px',
        margin: '10px 0',
        padding: '20px 40px',
        borderRadius: '10px',
        textDecoration: 'none',
        color: '#FFF',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
    },
    icon: {
        marginRight: '20px',
        fontSize: '28px',
    },
    text: {
        flex: 1,
        textAlign: 'left',
    },
    arrow: {
        marginLeft: '20px',
        fontSize: '28px',
    },
};

export default OptionsPage;
