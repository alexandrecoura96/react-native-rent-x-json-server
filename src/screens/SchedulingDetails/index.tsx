import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Header,
  Content,
  Details,
  Description,
  Rent,
  Name,
  Period,
  Price,
  Brand,
  About,
  Acessories,
  Footer,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  CalendarIcon,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  RentalPriceLabel,
  CarImage,
} from "./styles";
import { Button } from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CarDTO } from "../../dtos/carDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { format } from "date-fns";
import { getPlatformDate } from "../../utils/getPlataformDate";
import { api } from "../../services/api";

interface Params {
  car: CarDTO;
  dates: string[];
}
interface RentalPeriodProps {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const { car, dates } = route.params as Params;
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps
  );
  const rentalTotal = Number(dates.length * car.rent.price);

  async function handleConfirmRental() {
    setLoading(true);
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);
    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post("schedules_byuser", {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), "dd,MM,yyyy"),
      endDate: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd,MM,yyyy"
      ),
    });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(() => navigation.navigate("SchedulingComplete"))
      .catch(() => {
        setLoading(false);
        Alert.alert("Não foi possível confirmar o agendamento");
      });
  }
  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd,MM,yyyy"),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd,MM,yyyy"
      ),
    });
  }, []);
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImage>
        <ImageSlider imagesUrl={car.photos} />
      </CarImage>
      <Content>
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
        <Acessories>
          {car.accessories.map((item) => (
            <Acessory
              key={item.type}
              name={item.name}
              icon={getAccessoryIcon(item.type)}
            />
          ))}
        </Acessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.color.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>
          <Feather
            name="chevrons-right"
            size={RFValue(10)}
            color={theme.color.text}
          />
          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diarias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          loading={loading}
          enabled={!loading}
          title="Alugar agora"
          onPress={handleConfirmRental}
          color={theme.color.success}
        />
      </Footer>
    </Container>
  );
}
