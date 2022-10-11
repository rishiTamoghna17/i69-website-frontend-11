import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '@material-ui/core/Button';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomdivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomdivider ? 'has-bottom-divider':''
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  ADVANTAGES
                  </h3>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  i69 IS the Best dating app , FREE app and SAFE for dating .
                  </div>

                <p className="m-0">
                  Good place to meet :Soulmate, Friends, Roommates and Business Contacts nearby …
                  </p>
                <Button variant="contained" style={{ margin: 50}}  color="secondary" href="https://play.google.com/store/apps/details?id=soft.agency.kbt.com.i69.stage&hl=en" target="_blank">
                  Download
                </Button>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'/images/interracial-coluple.jpg'}
                  alt="interracial-coluple"
                  width={1184}
                  height={789} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  FAST REGISTRATION
                  </h3>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  via social networks
                  </div>

                <p className="m-0">
                  To use i69 services you should be registreted in one of the following social networks : Facebook , Twitter or Google(gmail)

                  Create a new profile or authorize via Facebook, Twitter or Google (gmail) It takes just 10 seconds to start meeting people!

                  We have very improved communication system which provides real time communication with members using many options such as gift sending , text messaging, sharing photos,etc.
                  </p>
                <Button variant="contained" style={{ margin: 50}} color="secondary" href="https://play.google.com/store/apps/details?id=soft.agency.kbt.com.i69.stage&hl=en" target="_blank">
                  Download
                </Button>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-left',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div>
                  <Image
                    src={'/images/search.png'}
                    alt="Features split 02"
                    width={200}
                    height={396} />
                </div>

              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div> */}
                <h3 className="mt-0 mb-12">
                  FREE SERVICES
                  </h3>
                <p className="m-0">
                  i69 offers 100% free services to all women desired to Obtain free service for all the features in the app.

                  Send request at: isixtyNine.adm@gmail.com

                  Attach copy of passport and/or valid id document , personnale infos for to receive a form to refil.

                  </p>
                <Button variant="contained"  style={{ margin: 50}}  color="secondary" href="https://play.google.com/store/apps/details?id=soft.agency.kbt.com.i69.stage&hl=en" target="_blank">
                  Download
                </Button>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'/images/i69-dating.png'}
                  alt="Features split 03"
                  width={287}
                  height={593} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  FILTERS
                  </h3>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  on i69 All people look for different: some look for
                  </div>

                <p className="m-0">
                  Serious Relationship , Some for Casual dating ,some for new friends, flirt , some for Roommates and some for Business Contacts.

                  You will appear on appropriated search screen and you will be connected only to people with the same interests than you.

                  How to please everyone?
                  Use advanced settings filters by dating purpose. Chat with people with the same goals.

                  Would you like to make new friends considering all your preferences?
                  Use filters for appearance type, height range,age range, tags , family status, children and even sexual preferences…
                  </p>
                <Button variant="contained"  style={{ margin: 50}} color="secondary" href="https://play.google.com/store/apps/details?id=soft.agency.kbt.com.i69.stage&hl=en" target="_blank">
                  Download
                </Button>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'/images/models-isixtynine.png'}
                  alt="Features split 02"
                  width={960}
                  height={959} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;