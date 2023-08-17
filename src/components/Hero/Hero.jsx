import React from 'react';
import {
  ContainerDivsHero,
  ContainerHero,
  TitleHero,
  ContainerDivHeroImg,
} from './HeroStyles';
export const Hero = () => {
  return (
    <ContainerHero>
      <ContainerDivHeroImg>
        <ContainerDivsHero>
          <TitleHero>SNEAKERS</TitleHero>
          <TitleHero>STYLE</TitleHero>
        </ContainerDivsHero>

        <ContainerDivsHero>
          <TitleHero>CULTURE</TitleHero>
          <TitleHero>COMMUNITY</TitleHero>
        </ContainerDivsHero>
      </ContainerDivHeroImg>
    </ContainerHero>
  );
};
