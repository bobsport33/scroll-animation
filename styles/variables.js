import { css } from "styled-components";
export const colors = {
    neutral100: "#FAFAFA",
    neutral200: "#F0F0F0",
    neutral300: "#E3E3E3",
    neutral400: "#949494",
    neutral500: "#7A7A7A",
    neutral600: "#595959",
    neutral700: "#404040",
    neutralBB800: "#262626",
    neutral900: "#1C1C1C",
    neutral1000: "#0A0A0A",

    red100: "#FEE6EB",
    red200: "#D7A2AE",
    red300: "#DB0032",
    red400: "#A80026",
    red500: "#5C0015",

    blue100: "#90B8DB",
    blue200: "#7596B2",
    blue300: "#5E788F",
    blue400: "#485C6E",
    blue500: "#2C3842",

    tan100: "#F2EBDF",
    tan200: "#E0D9CC",
    tan300: "#ADA79D",
    tan400: "#7A766F",
    tan500: "#474541",

    orange100: "#E8A76F",
    orange200: "#BF7636",
    orange300: "#9C602C",
    orange400: "#69401D",
    orange500: "#472C14",

    yellow100: "#FFEEC7",
    yellow200: "#FFD67A",
    yellow300: "#E8BC58",
    yellow400: "#B59345",
    yellow500: "#826931",
};

export const fonts = {
    kumbh: "Kumbh Sans, sans-serif",
    eurostyle: "eurostyle, sans-serif",
    teko: "teko, sans-serif",
};

export const media = {
    desktop: "(min-width: 1101px)",
    tablet: "(max-width: 1100px)",
    mobile: "(max-width: 500px)",
};

export const underlineAni = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;

    &::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: ${colors.neutral100};
        position: absolute;
        bottom: -2px;
        transition: width 0.3s;
    }

    &:hover {
        cursor: pointer;
        &::after {
            width: 100%;
        }
    }
`;
