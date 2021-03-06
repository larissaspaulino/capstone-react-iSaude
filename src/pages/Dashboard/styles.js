import styled, { keyframes } from "styled-components"

const appearFromDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(70px)
    }
    to {
        opacity: 1;
        transform: translateY(0px)
    }
`

export const DashHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
  @media (min-width: 768px) {
  }
`

export const UserContainer = styled.div`
  width: 300px;
  height: 125px;
  display: flex;
  align-items: center;
  margin: 20px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  img {
    width: 90px;
    height: 110px;
    margin: 20px;
    border-radius: 5px;
  }
  button {
    margin-left: 30px;
  }

  @media screen and (max-width: 320px) {
    overflow: auto;
    
  }
`

export const UserInfos = styled.div`
  width: 200px;
  height: 105px;
  display: flex;
  flex-wrap: wrap;
  h3 {
    font-weight: bold;
    font-size: 14px;
  }
`

export const UserData = styled.section`
  width: 150px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  .segunda-coluna {
    margin-left: 7px;
  }
  span {
    color: var(--grey-2);
    font-weight: bold;
    font-size: 10px;
  }
  p {
    color: var(--dark-blue-2);
    font-weight: bold;
    font-size: 12px;
  }
`

export const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .nao-cadastrada {
    color: var(--grey-2);
    font-weight: 700;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
  }

 
  @media (min-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
    animation: ${appearFromDown} 1.6s;
  }
`

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: var(--blue-2);
    :hover {
      color: var(--orange);
    }
  }
`
export const ContainerSearchMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (min-width: 768px) {
    display: none;
  }
`

export const FilterInputMobile = styled.input`
  width: 160px;
  display: block;
  border-radius: 10px;
  padding: 8px;
  border: 1.2px solid var(--dark-blue);
  font-size: 15px;
  margin-right: 10px;
  margin-top: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ButtonSearchMobile = styled.button`
  display: block;
  padding: 8px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  border-radius: 10px;
  background-color: var(--dark-blue);
  @media (min-width: 768px) {
    display: none;
  }
`

export const ImageLoading = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40px;
  height: 30px;
  margin: 20px auto;
`

export const ErrorSearchMessage = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 15px auto;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: var(--grey-2);
  font-weight: 700;
  font-size: 16px;
  padding: 5px;
  span {
    font-weight: 700;
    color: black;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }
  span {
    font-weight: 700;
    margin-left: 6px;
    margin-right: 6px;
    color: black;
  }
`

export const SkeletonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 800px;
  margin: 0px 20px;
  > div {
    margin: 15px;
  }
`

export const ButtonsFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`

export const StyledButton = styled.button`
  border: 3px solid var(--light-blue-1);
  font-size: 18px;
  border-radius: 10px;
  padding: 5px 7px;
  background: #fff;
  margin-top: 5px;
  color: var(--blue-1);
  font-weight: 600;
  height: 30px;
  :hover {
    transition: 0.3s;
    color: var(--blue-2);
  }
  @media (min-width: 768px) {
    margin-left: 10px;
  }
`