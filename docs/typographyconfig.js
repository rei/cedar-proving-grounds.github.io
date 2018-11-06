const _ = require('lodash');

function overrideDefault(defObj, newObj) {
  return _.merge({}, defObj, newObj);
}

/*
  ---------- Default values ----------
*/

// Styles
const defaultStyles = {
  'font-weight': `normal`,
  'font-style': `normal`,
};

// Heading-Paragraph
const defaultHeadingParagraph = {
  headingStyles: overrideDefault(defaultStyles, {
    'font-size': '96px',
    'line-height': '104px',
    'font-weight': 'bold',
  }),
  paragraphStyles: overrideDefault(defaultStyles, {
    'font-size': '20px',
    'line-height': '32px',
  }),
};

// Characters
const defaultCharacterValues = {
  styles: overrideDefault(defaultStyles, { 
    'font-size': '40px',
    'line-height': '48px',
    'letter-spacing': '5px',
  }),
  value: `AEHORabcdefghilnorst235,-.`,
};

// Font weights
const defaultWeightsValues = {
  styles: overrideDefault(defaultStyles, { 'font-size': '64px' }),
  value: `Aa`,
};

const defaultLongValues = {
  styles: overrideDefault(defaultStyles, {
    'font-size': '20px',
    'line-height': '32px',
  }),
  heading: `Inspiring`,
  headingStyles: {
    'font-size': '28px',
    'line-height': '36px',
    'font-weight': 'bold',
    'margin-top': '2rem',
    'margin-bottom': '2rem',
  },
  p1: `We believe it's in the outdoors that we find our best selves. Our digital products are tethered to that belief &mdash; a place our users come to dream, be curious, scheme, and plan.`,
  p2: `We are a destination for discovery. To remind people to think "what if?", encouraging exploration and rewarding curiosity. Storytelling is at the very center of everything we create: helping people find what they are looking for, and surprising and delightering them when they discover new, interesting things`,
};

// Ambiguous
const defaultAmbigousValues = {
  styles: overrideDefault(defaultStyles, { 'font-size': '64px' }),
  value: [`8B`, `Il1`, `ao`, `O0`, `69`],
};

// Type scale
const defaultScaleValues = {
  styles: defaultStyles,
  value: `Your Outdoor Co-op`,
};

/* 
  ---------- Configs ----------
*/

// Default
const defaultConfig = {
  name: 'Sentinel',
  family: 'Sentinel',
  headingParagraph: defaultHeadingParagraph,
  characters: [
    defaultCharacterValues,
    overrideDefault(defaultCharacterValues, { styles: { 'font-weight': 'bold'} }),
  ],
  weights: [
    overrideDefault(defaultWeightsValues, { styles: { 'font-weight': 'lighter'} }),
    defaultWeightsValues,
    overrideDefault(defaultWeightsValues, { styles: { 'font-weight': 'bold'} }),
    overrideDefault(defaultWeightsValues, { styles: { 'font-weight': 'bolder'} }),
  ],
  long: [
    defaultLongValues,
    overrideDefault(defaultLongValues, { styles: { 'font-weight': 'lighter'} }),
  ],
  ambiguous: [
    defaultAmbigousValues,
  ],
  scale: [
    overrideDefault(defaultScaleValues, { styles: { 
      'font-size': `96px`,
      'line-height': '104px',
    } }),
    overrideDefault(defaultScaleValues, { styles: { 
      'font-size': `76px`,
      'line-height': '84px',
    } }),
    overrideDefault(defaultScaleValues, { styles: { 
      'font-size': `56px`,
      'line-height': '60px',
    } }),
    overrideDefault(defaultScaleValues, { styles: { 
      'font-size': `40px`,
      'line-height': '48px',
    } }),
    overrideDefault(defaultScaleValues, { styles: { 
      'font-size': `32px`,
      'line-height': '40px',
    } }),
    overrideDefault(defaultScaleValues, { styles: { 
      'font-size': `28px`,
      'line-height': '36px',
    } }),
    overrideDefault(defaultScaleValues, { styles: { 
      'font-size': `24px`,
      'line-height': '32px',
    } }),
    overrideDefault(defaultScaleValues, { styles: { 
      'font-size': `20px`,
      'line-height': '28px',
    } }),
    overrideDefault(defaultScaleValues, { styles: { 
      'font-size': `18px`,
      'line-height': '24px',
    } }),
    overrideDefault(defaultScaleValues, { styles: { 
      'font-size': `16px`,
      'line-height': '24px',
    } }),
    overrideDefault(defaultScaleValues, { styles: { 
      'font-size': `14px`,
      'line-height': '20px',
    } }),
  ],
};

console.log(defaultConfig.long);

// Mali
const maliConfig = overrideDefault(defaultConfig, {
  name: 'Mali',
  family: 'Mali',
  href: "https://fonts.googleapis.com/css?family=Mali:300,300i,400,400i,600,600i",
  weights: [
    defaultWeightsValues,
    overrideDefault(defaultWeightsValues, { styles: { 'font-weight': '600' } }),
  ],
  long: [
    defaultLongValues,
    overrideDefault(defaultLongValues, { styles: { 'font-weight': '300' } }),
  ],
});

// Charmonman
const charmonmanConfig = overrideDefault(defaultConfig, {
  name: 'Charmonman',
  family: 'Charmonman',
  href: "https://fonts.googleapis.com/css?family=Charmonman:400,700",
});

export default {
  defaultConfig,
  maliConfig,
  charmonmanConfig
};