import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const COLORS = {
    primary: '#EF4C2D',
    title: '#072F4A',
    white: '#FFFFFF',
    lightGrey: '#D3D6D6',
    grey: '#F5F5F5',
    grey_100:"#9E9E9E",
    blue: '#087BB6',
    yellow: '#F4D03F',
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
}