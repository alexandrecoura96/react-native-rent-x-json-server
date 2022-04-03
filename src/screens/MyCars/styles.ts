import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  padding: 0 16px;
  width: 100%;
`;
export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.color.header};
  justify-content: center;
  padding: 50px 24px 24px 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  margin-top: 24px;
`;
export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.color.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
  margin-top: 24px;
`;

export const AppointmentsTitle = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
`;
export const AppointmentsAmmount = styled.Text`
  color: ${({ theme }) => theme.color.title};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;
  margin-top: -10px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.background_secondary};
`;
export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterTitle = styled.Text`
  color: ${({ theme }) => theme.color.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;
export const CarFooterDate = styled.Text`
  color: ${({ theme }) => theme.color.title};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(13)}px;
`;
