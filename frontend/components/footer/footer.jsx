import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer-container">
                <div className="footer-content">
                    <ul className="footer-links">
                        <li>
                            <a href="http://github.com/pkupchick/" 
                            target="_blank" className="unstyled-link">Git Hub</a>
                        </li>
                        <li>Other Projects</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;

