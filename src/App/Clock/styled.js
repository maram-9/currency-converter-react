import styled from "styled-components";

export const Wrapper = styled.div`
text-align:  right;
font-family: monospace;
color: ${({ theme }) => theme.color.boulder};

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 5px;
    text-align: center;
`;