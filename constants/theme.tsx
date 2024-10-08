import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');
const isTablet = Math.min(width, height) >= 600;


export const COLORS = {
    primary: '#EF4C2D',
    title: '#072F4A',
    white: '#FFFFFF',
    lightGrey: '#D3D6D6',
    grey: '#F5F5F5',
    grey_100:"#9E9E9E",
    grey_200:"#D9D9D9",
    grey_300:"#7C7C7C",
    blue: '#087BB6',
    yellow: '#F4D03F',
    mobile:"#f2f3f4"
};

export const SIZES = {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

    width,
    height,
    isTablet:isTablet
}