import React from 'react';

import {
  MasterContainer,
  StyledContentContainer,
} from '../../components/Container/index.styled.ts';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import {
  StyledCards,
  StyledCardsFx,
} from '../../components/Cards/index.styled.ts';
import {
  ProjectItemContainer,
  StyledProjectContentContainer,
} from './index.styled.ts';
import {
  StyledSubtitleText,
  StyledTitleText,
} from '../../components/Text/index.styled.ts';

const Projects = () => {
  return (
    <MasterContainer id='projects' withPadding={true}>
      <StyledContentContainer>
        <StyledTitleText textColor={'light'} isCentered={true}>
          Featured Projects
        </StyledTitleText>
        <StyledProjectContentContainer isFullScreen={true} id='#projects'>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <ProjectItemContainer>
                <StyledCards>
                  <StyledCardsFx>
                    <StyledSubtitleText>Coming Soon</StyledSubtitleText>
                  </StyledCardsFx>
                </StyledCards>
              </ProjectItemContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ProjectItemContainer>
                <StyledCards>
                  <StyledCardsFx>
                    <StyledSubtitleText>Coming Soon</StyledSubtitleText>
                  </StyledCardsFx>
                </StyledCards>
              </ProjectItemContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ProjectItemContainer>
                <StyledCards>
                  <StyledCardsFx>
                    <StyledSubtitleText>Coming Soon</StyledSubtitleText>
                  </StyledCardsFx>
                </StyledCards>
              </ProjectItemContainer>
            </SwiperSlide>
          </Swiper>
        </StyledProjectContentContainer>
      </StyledContentContainer>
    </MasterContainer>
  );
};

export default Projects;
