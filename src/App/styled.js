import styled from "styled-components";

export const Content = styled.div`
    flex-basis: 700px;
    margin: 20px;
    padding: 40px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    box-shadow: 0 0 30px ${({ theme }) => theme.color.black};
`;