import PropTypes from 'prop-types';
import { Ar, Br, Ch, De, El, En, Es, Fa, Fr, It, Iw, Ja, Ko, Nl, Po, Ru, Sw } from '../assets/images';
// Props shared by all sections
const SectionShared = {
  types: {
    topOuterDivider: PropTypes.bool,
    bottomouterdivider: PropTypes.bool,
    topDivider: PropTypes.bool,
    bottomdivider: PropTypes.bool,
    hasBgColor: PropTypes.bool,
    invertColor: PropTypes.bool
  },
  defaults: {
    topOuterDivider: false,
    bottomouterdivider: false,
    topDivider: false,
    bottomdivider: false,
    hasBgColor: false,
    invertColor: false
  }
}

// Default section props
export const SectionProps = {
  types: {
    ...SectionShared.types
  },
  defaults: {
    ...SectionShared.defaults
  }
}

// Section split props
export const SectionSplitProps = {
  types: {
    ...SectionShared.types,
    invertMobile: PropTypes.bool,
    invertDesktop: PropTypes.bool,
    alignTop: PropTypes.bool,
    imageFill: PropTypes.bool
  },
  defaults: {
    ...SectionShared.defaults,
    invertMobile: false,
    invertDesktop: false,
    alignTop: false,
    imageFill: false
  }
}

// Section tiles props
export const SectionTilesProps = {
  types: {
    ...SectionShared.types,
    pushLeft: PropTypes.bool
  },
  defaults: {
    ...SectionShared.defaults,
    pushLeft: false
  }
}


// Language array
export const LanguageArray = [
  { label: "en", value: "english", image: En },
  { label: "fr", value: "france", image: Fr },
  // { label: "zh-cn", value: "ChineseSimplified", image: Ch },
  // { label: "zh-tw", value: "ChineseTraditional", image: Ch },
  { label: "nl", value: "Dutch", image: Nl },
  { label: "de", value: "German", image: De },
  { label: "sw", value: "Swahili", image: Sw },
  { label: "el", value: "German", image: De },
  // { label: "it", value: "Italian", image: It },
  { label: "ar", value: "Arabic", image: Ar },
  { label: "iw", value: "Hebrew", image: Iw },
  { label: "ja", value: "Japenese", image: Ja },
  { label: "ru", value: "Russian", image: Ru },
  { label: "fa", value: "Persian", image: Fa },
  // { label: "pt-br", value: "Portuges(Brazil)", image: Br },
  // { label: "pt-pt", value: "Portugese(Portgal)", image: Po },
  { label: "es", value: "Spanish", image: Es },
  { label: "el", value: "Greek", image: El },
  { label: "ko", value: "Korean", image: Ko },
]
