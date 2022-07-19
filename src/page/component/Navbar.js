import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const menuList = [
        "봉제인형",
        "손가락인형",
        "피규어",
        "마스코트",
        "패션",
        "포켓몬카드",
        "문구류",
        "잡화"
    ]

    
    return (
        <div>
            <div className="login-button">
                <FontAwesomeIcon icon={faUser} />
                Login
            </div>
            <div className="nav-section">
                <img 
                    width={150} 
                    src="data:image/png;base64,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"
                />
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map(menu => <li>{menu}</li>)}
                </ul>
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;