import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const {width, height} = Dimensions.get('window');

const isSmall = width <= 405 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const horizontalScale = (size: number) => (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = (size: number) => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 480;
  }
  return 400;
};

const scaleFontSize = (size: number) => Math.round((width / guidelineBaseFonts()) * size);

export {horizontalScale, verticalScale, scaleFontSize};

/**
 * Which scaling function would you choose when you're applying a generic property that affects both horizontal and vertical axis?
 * ex: padding 
 * >> horizontalScale
 */