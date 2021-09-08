import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`
export const fadeIn = ({ time = '3s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`

const animationList = keyframes`
  from{
    top:-200px;
  }
  to{
    top:50px;
  }
`

export const dropList = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${animationList} ${type} forwards;
`
