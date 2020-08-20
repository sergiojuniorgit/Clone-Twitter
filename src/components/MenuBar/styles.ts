import styled, { css } from 'styled-components';

import { Home, Notifications, Email, FavoriteBorder, ExitToApp, Person,Rocketseat } from '../../styles/Icons'

export const Container = styled.div ``;

 export const Topside  = styled.div ``;
 export const Logo = styled.div ``;
 export const MenuButton = styled.div ``;
 

const iconsCSS = css `
  flex-shrink:0;

  width:30px;
  height:30px;
  color:var(--white);
`;


 export const HomeIcon = styled(Home) `${iconsCSS}`;
 export const BellIcon = styled(Notifications) `${iconsCSS}`;
 export const EmailIco = styled(Email) `${iconsCSS}`;
 export const FavoriteIcon = styled(FavoriteBorder) `${iconsCSS}`;
 export const ProfileIcon = styled(Person) `${iconsCSS}`;