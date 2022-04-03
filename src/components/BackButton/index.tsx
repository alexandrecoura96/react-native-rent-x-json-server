import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Container } from "./styles";
import { useTheme } from "styled-components";
import { BorderlessButtonProps } from "react-native-gesture-handler";

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...props }: Props) {
  const theme = useTheme();
  return (
    <Container enabled {...props}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.color.text_detail}
      />
    </Container>
  );
}
