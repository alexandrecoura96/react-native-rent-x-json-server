import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.header};
  padding-top: 96px;
  padding-bottom: 80px;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.color.shape};
  margin-top: 40px;
`;
export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.color.text_detail};
  text-align: center;
  margin-top: 16px;
  line-height: ${RFValue(26)}px;
`;
export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin: 40px 0px;
`;
