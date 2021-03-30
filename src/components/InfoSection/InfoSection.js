import React from "react";
import { Button } from "../ButtonElements";
import {
  BtnWrap,
  Heading,
  InfoRow,
  SubTitle,
  TextWrapper,
  TopLine,
  Columm1,
  Column2,
  ImgWrap,
  Img,
  InfoContainer,
  InfoWrapper,
} from "./InfoElements";

function InfoSection({
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  alt,
  img,
  primary,
  dark,
  dark2,
  lightBg,
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Columm1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                  <Button
                    to="home"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Columm1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
