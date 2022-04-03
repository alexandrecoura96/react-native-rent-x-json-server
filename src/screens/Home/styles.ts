import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CarDTO } from "../../dtos/carDTO";
import styled from "styled-components/native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.color.header};
  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.color.text};
`;

export const CarList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 24,
  },
})`` as React.ComponentType as new <CarDTO>() => FlatList<CarDTO>;

export const MyCarsButton = styled(ButtonAnimated)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.main};
  align-items: center;
  justify-content: center;
`;
