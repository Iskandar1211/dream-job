/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// Orange accent color (primary brand color)
const orangePrimary = '#FE5900'; // Main orange
const orangeLight = '#FFD8A5';
const orangeMedium = '#FF9332';
const orangeDark = '#CC3F02';

// Dark theme colors
const darkBackground = '#060503'; // Very dark background
const darkSurface = '#0F0F0F'; // Card/surface background
const darkSurfaceSecondary = '#2A2A2A'; // Secondary surface

// Text colors
const textPrimary = '#FFFFFF';
const textSecondary = '#B3B3B3';
const textTertiary = '#808080';

// Card gradient colors
const cardOrangeStart = '#FF6B35';
const cardOrangeEnd = '#FF8C5A';
const cardGreyStart = '#3A3A3A';
const cardGreyEnd = '#4A4A4A';

// Status and category colors
const categoryDot = '#FF6B35';
const progressBar = '#FF6B35';

// Brand colors for transactions
const starbucksGreen = '#00704A';
const netflixRed = '#E50914';

const tintColorLight = orangePrimary;
const tintColorDark = orangePrimary;

export const Colors = {
  light: {
    text: '#11181C',
    textSecondary: '#687076',
    textTertiary: '#9BA1A6',
    background: '#fff',
    surface: '#F5F5F5',
    surfaceSecondary: '#E5E5E5',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: orangePrimary,
    // Orange accent colors
    orange: {
      primary: orangePrimary,
      medium: orangeMedium,
      light: orangeLight,
      dark: orangeDark,
    },
    // Card gradients
    card: {
      orangeStart: cardOrangeStart,
      orangeEnd: cardOrangeEnd,
      greyStart: '#E0E0E0',
      greyEnd: '#D0D0D0',
    },
    // Category and status
    category: categoryDot,
    progress: progressBar,
    // Brand colors
    brands: {
      starbucks: starbucksGreen,
      netflix: netflixRed,
    },
  },
  dark: {
    text: textPrimary,
    textSecondary: textSecondary,
    textTertiary: textTertiary,
    background: darkBackground,
    surface: darkSurface,
    surfaceSecondary: darkSurfaceSecondary,
    tint: tintColorDark,
    icon: textSecondary,
    tabIconDefault: textTertiary,
    tabIconSelected: orangePrimary,
    // Orange accent colors
    orange: {
      primary: orangePrimary,
      medium: orangeMedium,
      light: orangeLight,
      dark: orangeDark,
    },
    // Card gradients
    card: {
      orangeStart: cardOrangeStart,
      orangeEnd: cardOrangeEnd,
      greyStart: cardGreyStart,
      greyEnd: cardGreyEnd,
    },
    // Category and status
    category: categoryDot,
    progress: progressBar,
    // Brand colors
    brands: {
      starbucks: starbucksGreen,
      netflix: netflixRed,
    },
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
