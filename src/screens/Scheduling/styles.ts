import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background_secondary};
`;
export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.color.header};
  justify-content: center;
  padding: 60px 30px 15px 30px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(34)}px;
  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  margin: 16px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const DateInfo = styled.View`
  width: 30%;
`;
export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;
export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.color.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;

  ${({ selected, theme }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.color.text};
      padding-bottom: 5px;
    `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 23,
  },
  showsVerticalScrollIndicator: false,
})``;
export const Footer = styled.View`
  padding: 24px;
`;
