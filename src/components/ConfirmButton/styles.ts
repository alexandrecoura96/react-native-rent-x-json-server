import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  height: 56px;
  width: 80px;
  background-color: ${({ theme }) => theme.color.shape_dark};
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.color.shape};
`;
