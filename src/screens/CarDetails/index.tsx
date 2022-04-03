import React from "react";
import { StatusBar } from "react-native";
import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import {
  Container,
  Header,
  Details,
  Description,
  Rent,
  Name,
  Period,
  Price,
  CarImage,
  Brand,
  About,
  Accessories,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CarDTO } from "../../dtos/carDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
    console.log(event.contentOffset.y);
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  function handleConfirmRental() {
    navigation.navigate("Scheduling", {
      car,
    });
  }
  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Animated.View style={[headerStyleAnimation]}>
        <Header>
          <BackButton onPress={handleBack} />
        </Header>
        <CarImage style={sliderCarsStyleAnimation}>
          <ImageSlider imagesUrl={car.photos} />
        </CarImage>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((item) => (
            <Acessory
              key={item.type}
              name={item.name}
              icon={getAccessoryIcon(item.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Animated.ScrollView>
      <Footer>
        <Button
          title="Escolher o periodo do aluguel"
          onPress={handleConfirmRental}
          enabled
        />
      </Footer>
    </Container>
  );
}
