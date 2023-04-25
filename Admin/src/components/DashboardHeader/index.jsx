import React, { useState } from 'react';
import './styles.css';
import NotificationIcon from '../../assets/icons/notification.svg';
import SettingsIcon from '../../assets/icons/settings.svg';

function DashboardHeader ({ btnText, onClick }) {
    const [isActive, setIsActive] = useState(false);

    const handleIsActive = () => {
        setIsActive(!isActive);
    }

    return(
        <div className='dashbord-header-container'>
            {btnText && 
                <button className='dashbord-header-btn' onClick={onClick}>{btnText}</button>
            }

            
        </div>
    )
}

export default DashboardHeader;
