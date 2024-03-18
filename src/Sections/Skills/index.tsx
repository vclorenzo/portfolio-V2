import React, { useEffect } from 'react';
import {
  MasterContainer,
  StyledSplitContainer,
  StyledTextContainer,
} from '../../components/Container/index.styled.ts';
import {
  SkillsShowcaseContainer,
  SkillsShowcaseItem,
  StyledSkillItemContainer,
} from './index.styled.ts';
import {
  SiPostman,
  SiSelenium,
  SiReact,
  SiNextdotjs,
  SiGatsby,
  SiApollographql,
  SiTypescript,
  SiStyledcomponents,
  SiMui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiStrapi,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { StyledMainText } from '../../components/Text/index.styled.ts';
import UFT from '../../assets/svg/UFT.tsx';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContainerVariantL = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
      delay: 1,

      ease: 'easeInOut',
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};
const ContainerVariantR = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
      delay: 1,

      ease: 'easeInOut',
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

const CardVariant = {
  hidden: { y: '20%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
const TextVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.5,
      duration: 5,
      ease: 'easeOut',
    },
  },
};

const hoverObj = {
  scale: 1.1,
  originY: 1,
  originX: 1,
};

const SkillsQA = ({ animation }) => {
  return (
    <StyledSplitContainer isFullScreen={true}>
      <StyledSkillItemContainer>
        <StyledTextContainer isCentered={true}>
          <StyledMainText
            variants={TextVariant}
            initial='hidden'
            animate={animation}
          >
            QA
          </StyledMainText>
        </StyledTextContainer>
      </StyledSkillItemContainer>
      <StyledSkillItemContainer
        variants={ContainerVariantR}
        initial='hidden'
        animate={animation}
      >
        <SkillsShowcaseContainer>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiSelenium />
            <p>Selenium</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiPostman />
            <p>Postman</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <UFT width={70} height={70} />
            <p>HP UFT</p>
          </SkillsShowcaseItem>
        </SkillsShowcaseContainer>
      </StyledSkillItemContainer>
    </StyledSplitContainer>
  );
};
const SkillsDev = ({ animation }) => {
  return (
    <StyledSplitContainer isFullScreen={true} id='skills' isReversed={true}>
      <StyledSkillItemContainer
        variants={ContainerVariantL}
        initial='hidden'
        animate={animation}
      >
        <SkillsShowcaseContainer>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiReact />
            <p>ReactJS</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiNextdotjs />
            <p>NextJS</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiGatsby />
            <p>GasbyJS</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiApollographql />
            <p>Apollo</p>
          </SkillsShowcaseItem>
        </SkillsShowcaseContainer>
        <SkillsShowcaseContainer>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiStyledcomponents />
            <p>Styled Components</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <FaSass />
            <p>Sass</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiMui />
            <p>Material UI</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiBootstrap />
            <p>Bootstrap</p>
          </SkillsShowcaseItem>
        </SkillsShowcaseContainer>
        <SkillsShowcaseContainer>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiNodedotjs />
            <p>NodeJS</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiTypescript />
            <p>Typescript</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiExpress />
            <p>ExpressJS</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiNestjs />
            <p>NestJS</p>
          </SkillsShowcaseItem>
        </SkillsShowcaseContainer>
        <SkillsShowcaseContainer>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiMongodb />
            <p>MongoDB</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiPostgresql />
            <p>Postgresql</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiGraphql />
            <p>Graphql</p>
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiStrapi />
            <p>Strapi CMS</p>
          </SkillsShowcaseItem>
        </SkillsShowcaseContainer>
      </StyledSkillItemContainer>
      <StyledSkillItemContainer>
        <StyledTextContainer isCentered={true}>
          <StyledMainText
            variants={TextVariant}
            initial='hidden'
            animate={animation}
          >
            DEV
          </StyledMainText>
        </StyledTextContainer>
      </StyledSkillItemContainer>
    </StyledSplitContainer>
  );
};

const Skills = () => {
  const { ref: refDev, inView: inViewDev } = useInView();
  const { ref: refQA, inView: inViewQA } = useInView();
  const animationOne = useAnimation();
  const animationTwo = useAnimation();

  useEffect(() => {
    if (inViewDev) {
      animationOne.start('visible');
    }
    if (inViewQA) {
      animationTwo.start('visible');
    }
    if (!inViewDev) {
      animationOne.start('hidden');
    }
    if (!inViewQA) {
      animationTwo.start('hidden');
    }
  }, [animationOne, animationTwo, inViewDev, inViewQA]);

  return (
    <MasterContainer bgColor={'#333'}>
      <div ref={refDev}>
        <SkillsDev animation={animationOne} />
      </div>
      <div ref={refQA}>
        <SkillsQA animation={animationTwo} />
      </div>
    </MasterContainer>
  );
};

export default Skills;
