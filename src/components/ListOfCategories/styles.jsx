import styled, { css } from 'styled-components'
import { dropList } from '../../styles/animations'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 30px;
  ${props => props.fixed && css`
    background-color: #ffff;
    border-radius: 50px;
    max-width: 400px;
    padding: 5px;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
    margin: 0 auto; //centrar
    left: 0;
    right: 0;
    top:-200px;
    position: fixed;
    z-index: 1;
    ${dropList()}

    `
  }
    
`
export const Item = styled.li`
  padding: 0px 8px;
`
