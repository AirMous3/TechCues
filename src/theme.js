import {css} from 'styled-components';

const font = 'sans-serif';

// Color palette
const black = '#000000';
const white = '#ffffff';
const error = '#c86464';
const gray = '#8f93a3';
const border = '#9c9fb0';
const green = '#22c993';

const boxShadows = [
    '6px 6px 16px rgba(17, 17, 49, 0.12)',
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
        gray,
        border,
        green,
        black,
        white,
        error,
    },
};
