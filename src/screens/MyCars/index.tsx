import { Dimensions, FlatList, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Appointments,
  AppointmentsAmmount,
  AppointmentsTitle,
  CarFooter,
  CarFooterDate,
  CarFooterPeriod,
  CarFooterTitle,
  CarWrapper,
  Container,
  Content,
  Header,
  SubTitle,
  Title,
} from "./styles";
import { CarDTO } from "../../dtos/carDTO";
import { api } from "../../services/api";
import { AntDesign } from "@expo/vector-icons";
import { BackButton } from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { AnimatedLoad } from "../../components/AnimatedLoad";

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/schedules_byuser?user_id=1");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton color={theme.color.shape} onPress={handleBack} />
        <Title>
          Escolha uma{"\n"}data de início{"\n"}e fim do aluguel.
        </Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>
      {loading ? (
        <AnimatedLoad />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsAmmount>{cars.length}</AppointmentsAmmount>
          </Appointments>
          <FlatList
            data={cars}
            contentContainerStyle={{
              paddingBottom: Dimensions.get("window").height / 2,
            }}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.color.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
}
