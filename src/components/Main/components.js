import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px 24px 24px rgba(52, 52, 147, 0.32);
  border-radius: 8px;
  margin-bottom: 120px;
  min-height: 600px;
  z-index: 10;
`;
export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
  z-index: 10;
`;
export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;
export const MainDescription = styled.div`
  font-size: 42px;
  line-height: 62px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  max-width: 464px;
  margin-right: 100px;
  margin-bottom: 30px;
`;
export const MainAuthor = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;
export const MainDate = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.whiteGray};
`;
export const MainImage = styled.img`
  z-index: 10;
`;
export const MainRightArrows = styled.img`
  z-index: 1;
  position: absolute;
  right: -7%;
  top: -48px;
  pointer-events: none;
`;
export const MainLeftArrows = styled.img`
  left: -50px;
  top: 255px;
  z-index: 1;
  position: absolute;
  pointer-events: none;
`;
