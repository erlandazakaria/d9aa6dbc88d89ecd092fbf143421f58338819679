import styled from 'styled-components';

// const

// const media = {
//     xl: (styles) => `
//         @media only screen and (min-width: 1920px) {
//             ${styles}
//         }
//     `,
// }

// border: 1px solid red;

export const Grid = styled.div`
    padding: ${(props) => props.padding};
`;

export const Row = styled.div`
    display: flex;
`;

export const Col = styled.div`
    flex: ${(props) => props.size};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => {
        if(Object.keys(props.theme).includes(props.color)) {
            return props.theme[props.color]
        } else {
            return props.color
        }
    }};
    font-family: ${(props) => props.bold ? 'GoogleSansBold;' : 'GoogleSansRegular;'}
    padding: ${(props) => props.padding};
    align-self: center;
`;

export const Icon = styled.img`
    height: ${(props) => props.height};
`;
