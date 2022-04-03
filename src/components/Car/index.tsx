import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import GasolineSvg from "../../assets/gasoline.svg";
import { CarDTO } from "../../dtos/carDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rend,
  Type,
} from "./styles";

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <Container {...rest}>
      <Details>
        <Brand>{`R$ ${data.brand}`}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rend>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rend>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
