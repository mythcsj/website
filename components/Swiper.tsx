import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Head from 'next/head';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: white;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 10px 0;
      font-size: 14px;
      width: 450px;
    }
  }
  & > img {
    filter: brightness(50%);
  }
`;

const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`;

export default function Swiper() {
  return (
    <>
      <Carousel
        // style={swiperContainer}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        <CarouselItem>
          <img src="/image/devops2020.jpg" />
          <Box>
            <Heading as="h2" size="lg">
              22
            </Heading>
            <Text>3233</Text>
            <Button colorScheme="red">按钮</Button>
          </Box>
        </CarouselItem>

        <CarouselItem>
          <img src="/image/hdz2020gx.jpg" />
          <Box>
            <Heading as="h2" size="lg">
              22
            </Heading>
            <Text>3233</Text>
            <Button colorScheme="red">按钮</Button>
          </Box>
        </CarouselItem>
      </Carousel>
    </>
  );
}
