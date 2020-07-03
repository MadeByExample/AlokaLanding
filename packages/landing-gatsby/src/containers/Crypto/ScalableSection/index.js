import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { ScalableWrapper, FeatureSection } from './scalable.style';
import ScalableImage from 'common/src/assets/image/crypto/scalable.jpg';

const ScalableHistory = ({
  row,
  col,
  title,
  description,
  sectionSubTitle,
  cardArea,
  featureTitleStyle,
  featureDescriptionStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        SCALABLE_FEATURE {
          title
          des
          image {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <ScalableWrapper id="scalable">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
            <Text content="Fast, Cheap, Zero Fraud" {...sectionSubTitle} />
            <FeatureBlock
              title={
                <Heading
                  content="A Scalable Proof of Investment Vehicle"
                  {...title}
                />
              }
              description={
                <Text
                  content="Easily buy, sell or exchange over 30 different cryptocurrencies. Now euro deposits and withdrawn available."
                  {...description}
                />
              }
            />
            <FeatureSection>
              {Data.cryptoJson.SCALABLE_FEATURE.map((item, index) => (
                <div key={`feature-${index}`} className="featureWrapper">
                  <Fade up>
                    <Image src={item.image.publicURL} alt={item.title} />
                    <Box className="contextPortion">
                      <Heading
                        as="h3"
                        content={item.title}
                        {...featureTitleStyle}
                      />

                      <Text content={item.des} {...featureDescriptionStyle} />
                    </Box>
                  </Fade>
                </div>
              ))}
            </FeatureSection>
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <Image
              src={ScalableImage}
              className="ScalableImage"
              alt="Scalable Section Image"
            />
          </Box>
        </Box>
      </Container>
    </ScalableWrapper>
  );
};

// Transactions style props
ScalableHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Scalable default style
ScalableHistory.defaultProps = {
  // Scalable section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Scalable section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Scalable section title default style
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
  },
  // Scalable section description default style
  description: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px'],
  },
  sectionSubTitle: {
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f',
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['1', '1', '1', '1', '1'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
  },
  // Scalable section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
  },
};

export default ScalableHistory;