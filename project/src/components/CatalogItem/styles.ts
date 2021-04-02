import styled, { css } from 'styled-components';

interface ContainerProps{
    failedStockCheck: boolean;
}

export const Container = styled.div<ContainerProps>`

padding: 10px;
display: flex;


strong{
    width: 200px;
}

span{
    width: 200px;
}

button{
    width: 10vw;
    height: 24px;
    background-color: #12D5EF;
    border:0;

    &:hover{
        opacity:0.6;
    }

    ${props =>
    props.failedStockCheck &&
    css`
      opacity: 0.3;
      cursor:  not-allowed;
    `}


}

`;