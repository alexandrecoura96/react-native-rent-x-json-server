import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styles";
import LottieView from "lottie-react-native";
import loadingCar from "../../assets/car_animated_loading.json";

export function AnimatedLoad() {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
