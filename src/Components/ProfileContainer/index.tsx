import { useRef, useState } from 'react';
import Btn from '../Btn';
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import './index.css'

const ProfileContainer = ({logoutUser}: {logoutUser: () => void}) => {
    const [isProfileMenuClicked, setIsProfileMenuClicked] = useState<boolean>(false);
    const [showProfileMenu, setProfileMenu] = useState<boolean>(false);
    const profileRef = useRef<HTMLDivElement>(null);

    const displayProfleMenu = () => {
        setProfileMenu((prev) => !prev);
        setTimeout(() => {setIsProfileMenuClicked(prev => !prev)},1)
    }



    return(
        <div className="profile-container" ref={profileRef}>
          <img src="https://constel-hr-frontend.s3.eu-central-1.amazonaws.com/nemanja_malesija.jpeg" onClick={displayProfleMenu} />
            {showProfileMenu && <div className={`profile-menu ${isProfileMenuClicked ? 'show' : ''}`}>
              <Btn onClick={logoutUser} type="button">
                <FiLogOut />
                <h2>Logout</h2>
              </Btn>
              <Btn type="button">
                <FaUser />
                <h2>Profile</h2>
              </Btn>
            </div>}
        </div>
    )
} 
export default ProfileContainer;