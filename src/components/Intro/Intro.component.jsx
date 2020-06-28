import React from "react";

import {
  IntroContainer,
  // Photo,
  Title,
  Text,
  // Dash,
  // SocialContainer,
  // Linkedin,
  // Github,
  // Steam,
  // Spotify,
} from "./Intro.style";

import cesar from "../../assets/images/cesar.png";
import dash from "../../assets/images/dash.jpg";

export const Sample = () => (
  <IntroContainer>
    <Title>
      Crie sua empresa vegana com os melhores serviços de tecnologia
    </Title>
    {/* <Photo>
      <img src={cesar} alt=""></img>
    </Photo> */}
    <Text>
      O veganismo é um movimento que cresce a cada dia. Milhares de pessoas
      estão percebendo que existem produtos e serviços incríveis para substituir
      aqueles de origem animal
    </Text>
    <Text>
      Se você tem um restaurante, empresa de moda, escola, santuarios ou empresa
      de eventos, conte com a gente. Confira abaixo os serviços oferecidos
    </Text>
    {/* <SocialContainer>
      <Linkedin />
      <Github />
      <Steam />
      <Spotify />
    </SocialContainer> */}
    <Title>Enjoy a nice contemplative JOHNNY picture below</Title>
    {/* <Dash>
      <img src={dash} alt=""></img>
    </Dash> */}
  </IntroContainer>
);

export default Sample;
