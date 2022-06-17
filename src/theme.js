import { css } from 'styled-components';

const font = 'sans-serif';

// Color palette
const black = '#000000';
const white = '#ffffff';
const border = '#EBEAF2';
const whiteGray = '#868297';
const secondary = '#5C5CFF';
const primary = '#413e52';
const darkBlue = '#111131';

const boxShadows = [
  '6px 6px 16px rgba(17, 17, 49, 0.12)',
  '0px 24px 24px rgba(52, 52, 147, 0.32)',
];

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
};

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const theme = {
  above,
  below,
  boxShadows,
  font,
  spaces: ['10px', '20px', '30px', '40px'],
  fontSizes: [
    '12px', // 0
    '14px', // 1
    '16px', // 2
    '20px', // 3
  ],
  colors: {
    whiteGray,
    primary,
    secondary,
    black,
    white,
    border,
    darkBlue
  },
};
