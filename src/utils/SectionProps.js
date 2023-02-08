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
  { label: "En", value: "en", image: En },
  { label: "Fr", value: "fr", image: Fr },
  { label: "Zh-cn", value: "zh_cn", image: Ch },
  { label: "Zh-tw", value: "zh_tw", image: Ch },
  { label: "Nl", value: "nl", image: Nl },
  { label: "De", value: "de", image: De },
  { label: "Sw", value: "sw", image: Sw },
  { label: "El", value: "el", image: De },
  { label: "It", value: "it", image: It },
  { label: "Ar", value: "ar", image: Ar },
  { label: "Iw", value: "iw", image: Iw },
  { label: "Ja", value: "ja", image: Ja },
  { label: "Ru", value: "ru", image: Ru },
  { label: "Fa", value: "fa", image: Fa },
  { label: "Pt-br", value: "pt_br", image: Br },
  { label: "Pt-pt", value: "pt_pt", image: Po },
  { label: "Es", value: "es", image: Es },
  { label: "El", value: "el", image: El },
  { label: "Ko", value: "ko", image: Ko },
  { label: "He", value: "he", image: Iw },

]
