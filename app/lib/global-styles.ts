import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

const GlobalStyle = createGlobalStyle`
${normalize}
html{
    background: #000;
    color: #fff;
}
`;

export default GlobalStyle;
