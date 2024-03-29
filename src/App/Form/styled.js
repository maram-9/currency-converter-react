import styled from "styled-components";

export const StyledForm = styled.form`
  margin: auto;
  text-align: left;
  padding: 10px;
  height: 400px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
 
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 420px;
  }
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-flex;
    margin-right: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 5px;
    text-align: center;
    }
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    width: 100%;
    max-width: 250px;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border-radius: 5px;
    transition: 0.3s;
    margin: 10px;
    padding: 10px;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.color.teal};
    text-align: center;
`;

export const Info = styled.div`
    font-size: small;
    text-align: center;
    margin: auto;
    color: ${({ theme }) => theme.color.emperor};
`;

export const Loading = styled.p`
  color: ${({ theme }) => theme.color.teal};
  text-align: center;
  padding-top: 90px;
`;

export const Failure = styled.p`
  color: ${({ theme }) => theme.color.crimson};
  text-align: center;
  padding-top: 90px;
`;