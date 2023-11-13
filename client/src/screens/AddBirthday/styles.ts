import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 20rem;
    height: 20rem;
  }
`;

export const TitleContainer = styled.div`
  h1{
    text-align:center;
    font-size: 3.5rem;
    color: #33A9FF;
    margin-bottom: 1rem;
  }
  p{
    font-size: 1.3rem;
    color: #33A9FF;
    margin: 0 auto;
    width: 15rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-weight: 400;
  
  .form-input-container{
    @media screen and (min-width: 501px) and (max-width: 1023px){
      min-width: 48.5%;
    }
  }

  input{
    padding: 1rem;
    border: 1px solid #33A9FF;
    border-radius: 1rem;
    font-size: 1.65rem;

    @media screen and (min-width: 501px){
      font-size: 1.8rem;
    }
    
    &::placeholder {
      color: #273178;
      opacity: 0.5;
      font-size: 1.65rem;
      @media screen and (min-width: 501px){
        font-size: 1.8rem;
      }
    } 
    &:focus {
      outline: none !important;
      border: 1.5px solid #33A9FF;
      box-shadow: #2DA9C7 0px 0px 0px 0.5px;
    }
  }
  
  label{
    color: ##C6E1F5;
    font-size: 1.65rem;
    font-weight: 500;
    margin-bottom: 0.5rem;

    @media screen and (min-width: 501px){
      font-size: 1.8rem;
    }
  }
`;

export const FormButton = styled.button`
  background: #0094FF;
  border: none;
  letter-spacing: 0.1rem;
  padding: 1.5rem 2.5rem;
  text-transform: uppercase;
  border-radius: 5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 1s ease;
  font-size: 1.5rem;
  color: #ffffff;
  margin-top: 0.75rem;
  
  .right-align{
    align-self: right;
  }

  @media screen and (min-width: 1024px){
    padding: 1.5rem 3rem;
    font-size: 1.8rem;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:hover{
    background: #35abff;
`;