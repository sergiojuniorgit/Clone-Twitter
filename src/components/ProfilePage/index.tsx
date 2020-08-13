import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilPage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar/>
          </Banner>

          <ProfileData>
              {/* <EditButton outlined>Editar perfil</EditButton> */}

              <h2>Sergio Júnior</h2>
              <h3>@juniorOSX</h3>

              <p>
                 Developer
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Duque de Caxias, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 29 de junho de 1997
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong>100</strong>
                  </span>
                  <span>
                      <strong> 1005 </strong> seguidores
                  </span>
              </Followage>
          </ProfileData>
      </Container>
  )
}

export default ProfilPage;