import { NavLink, useLocation } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { FaBirthdayCake } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';

import { FooterContainer, FooterItem, FooterItemText } from './styles';
import { ROUTES } from '../../common/constants';

const Footer = () => {
  const { HOME, ADD_BIRTHDAY, NOTIFICATIONS } = ROUTES;
  const { pathname } = useLocation();
  return (
    <FooterContainer>
      <NavLink to={HOME}>
        <FooterItem>
          <div>
            <RiHomeFill size={30} color={pathname === HOME ? "#33A9FF" : "#D7D8D9"} />
          </div>
          <FooterItemText isActive={pathname === HOME}>Home</FooterItemText>
        </FooterItem>
      </NavLink>
      <NavLink to={ADD_BIRTHDAY}>
        <FooterItem>
          <div><FaBirthdayCake size={32} color={pathname === ADD_BIRTHDAY ? "#33A9FF" : "#D7D8D9"} /></div>
          <FooterItemText style={{ marginTop: "0.25rem" }} isActive={pathname === ADD_BIRTHDAY}>Add birthday</FooterItemText>
        </FooterItem>
      </NavLink>
      <NavLink to={NOTIFICATIONS}>
        <FooterItem>
          <div><IoIosNotifications size={32} color={pathname === NOTIFICATIONS ? "#33A9FF" : "#D7D8D9"} /></div>
          <FooterItemText isActive={pathname === NOTIFICATIONS}>Notifications</FooterItemText>
        </FooterItem>
      </NavLink>
    </FooterContainer>
  )
}

export default Footer;