import { ActivityIndicator } from "react-native";
import React from "react";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  color,
  enabled,
  loading = false,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
      color={color}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={theme.color.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
