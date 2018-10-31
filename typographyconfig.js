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

// Characters
const defaultCharacterValues = {
  styles: overrideDefault(defaultStyles, { 'font-size': '32px' }),
  value: `AEHORabcdefghilnorst235,-.`,
};

// Font weights
const defaultWeightsValues = {
  styles: overrideDefault(defaultStyles, { 'font-size': '64px' }),
  value: `Aa`,
};

const defaultLongValues = {
  styles: defaultStyles,
  heading: `Inspiring`,
  headingStyles: {
    'font-size': '28px',
    'font-weight': 'bold',
    'margin-bottom': '1rem',
  },
  p1: `We believe it's in the outdoors that we find our best selves. Our digital products are tethered to that belief &mdash; a place our users come to dream, be curious, scheme, and plan.`,
  p2: `We are a destination for discovery. To remind people to think "what if?", encouraging exploration and rewarding curiosity. Storytelling is at the very center of everything we create: helping people find what they are looking for, and surprising and delighting them when they discover new, interesting things`,
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
  name: 'Default',
  family: 'inherit',
  characters: [
    defaultCharacterValues,
    overrideDefault(defaultCharacterValues, { styles: { 'font-weight': 'bold'} }),
  ],
  weights: [
    defaultWeightsValues,
    overrideDefault(defaultWeightsValues, { styles: { 'font-weight': 'bold'} }),
  ],
  long: [
    defaultLongValues,
    overrideDefault(defaultLongValues, { styles: { 'font-weight': 'light'} }),
  ],
  ambiguous: [
    defaultAmbigousValues,
  ],
  scale: [
    overrideDefault(defaultScaleValues, { styles: { 'font-size': `80px` } }),
    overrideDefault(defaultScaleValues, { styles: { 'font-size': `60px` } }),
    overrideDefault(defaultScaleValues, { styles: { 'font-size': `40px` } }),
    overrideDefault(defaultScaleValues, { styles: { 'font-size': `20px` } }),
  ],
};

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