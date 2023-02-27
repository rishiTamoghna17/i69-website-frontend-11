import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation()
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
                  {t('Home.advatages')}
                  </h3>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  {t('Home.best')}
                  </div>

                <p className="m-0">
                  {t('Home.goodPlace')}
                  </p>
                <Button variant="contained" style={{ margin: 50}}  color="secondary" href="https://play.google.com/store/apps/details?id=soft.agency.kbt.com.i69.stage&hl=en" target="_blank">
                  {t('Home.download')}
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
                  {t('Home.fastRegistration')}
                  </h3>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  {t('Home.socialnetwork')}
                  </div>

                <p className="m-0">
                  {t('Home.useServices')}
                  {t('Home.createProfile')}
                  {t('Home.improvedCommunication')}
                  </p>
                <Button variant="contained" style={{ margin: 50}} color="secondary" href="https://play.google.com/store/apps/details?id=soft.agency.kbt.com.i69.stage&hl=en" target="_blank">
                {t('Home.download')}
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
                  {t('Home.freeServices')}
                  </h3>
                <p className="m-0">
                  {t('Home.offerServices')}

                  {t('Home.email')}

                  {t('Home.attachCopy')}

                  </p>
                <Button variant="contained"  style={{ margin: 50}}  color="secondary" href="https://play.google.com/store/apps/details?id=soft.agency.kbt.com.i69.stage&hl=en" target="_blank">
                {t('Home.download')}
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
                  {t('Home.filters')}
                  </h3>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  {t('Home.all')}
                  </div>

                <p className="m-0">
                  {t('Home.seriousRelationship')}

                  {t('Home.searchScreen')}

                  {t('Home.everyone')}
                  {t('Home.advanceFilter')}

                  {t('Homw.newFriends')}
                  {t('Home.filtersAppearance')}
                  </p>
                <Button variant="contained"  style={{ margin: 50}} color="secondary" href="https://play.google.com/store/apps/details?id=soft.agency.kbt.com.i69.stage&hl=en" target="_blank">
                {t('Home.download')}
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