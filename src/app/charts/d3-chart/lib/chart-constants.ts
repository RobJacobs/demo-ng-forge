const CHART_CLASS_PREFIX = 'app-chart';

const classes = {
  CHART_PREFIX: CHART_CLASS_PREFIX,
  CHART_ROOT: `${CHART_CLASS_PREFIX}__root`,
  CHART_YAXIS: `${CHART_CLASS_PREFIX}__yaxis`,
  CHART_XAXIS: `${CHART_CLASS_PREFIX}__xaxis`,
  CHART_NODE: `${CHART_CLASS_PREFIX}__node`,
  CHART_TEXT: `${CHART_CLASS_PREFIX}__text`,
  CHART_LEGEND: `${CHART_CLASS_PREFIX}__legend`,
  CHART_METER: `${CHART_CLASS_PREFIX}__meter`,
  CHART_POPOVER: `${CHART_CLASS_PREFIX}__popover`,
  CHART_CLIP: `${CHART_CLASS_PREFIX}__clip`,
  CHART_TEXT_LABEL: `${CHART_CLASS_PREFIX}__text-label`,
  CHART_TEXT_VALUE: `${CHART_CLASS_PREFIX}__text-value`,
  LEGEND_TEXT: `${CHART_CLASS_PREFIX}__legend-text`,
  LEGEND_TEXT_LABEL: `${CHART_CLASS_PREFIX}__legend-text-label`,
  LEGEND_TEXT_VALUE: `${CHART_CLASS_PREFIX}__legend-text-value`
};

const numbers = {
  TRANSITION_DURATION: 500
};

const strings = {
  FONT_FAMILY: 'Roboto',
  FONT_SIZE_SMALL: '10px',
  FONT_SIZE: '16px'
};

// From TUX color specs
// https://confl.tylertech.com/pages/viewpage.action?pageId=7008553
const chartPalette = {
  amber600: '#ffb300',
  cyan400: '#26c6da',
  purple300: '#ba68c8',
  indigoA200: '#536dfe',
  green400: '#66bb6a',
  deepOrangeA200: '#ff6e40',
  amberA200: '#ffd740',
  purple200: '#ce93d8',
  indigo200: '#9fa8da',
  lightBlue200: '#81d4fa',
  green200: '#a5d6a7',
  lime200: '#e6ee9c',
  amber200: '#ffe082',
  deepOrange200: '#ffab91',
  grey400: '#bdbdbd'
};

const chartTheme = {
  textHigh: 'var(--forge-theme-text-high, rgba(0, 0, 0, 0.87))',
  textMedium: 'var(--forge-theme-text-medium, rgba(0, 0, 0, 0.6))',
  textInverse: 'var(--forge-theme-on-surface-inverse, #ffffff)',
  outline: 'var(--forge-theme-outline, #e0e0e0)',
  outlineMedium: 'var(--forge-theme-outline-medium, #757575)',
  surface: 'var(--forge-theme-surface, #ffffff)',
  surfaceDim: 'var(--forge-theme-surface-dim, #f5f5f5)'
};

export const CHART_CONSTANTS = {
  classes,
  numbers,
  strings,
  chartPalette,
  chartTheme
};
