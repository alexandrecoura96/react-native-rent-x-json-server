import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  Calendar as CustomCalendar,
  LocaleConfig,
  DateData,
} from "react-native-calendars";
import { Container } from "./styles";
import { useTheme } from "styled-components";
import { ptBR } from "./localeConfig";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";
interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  };
}
type DayProps = DateData;
interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress?: (date: DateData) => void;
}
function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();
  return (
    <CustomCalendar
      headerStyle={{
        backgroundColor: theme.color.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.color.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.color.text}
          name={direction == "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontSize: 10,
        textDayHeaderFontFamily: theme.fonts.primary_500,

        textMonthFontFamily: theme.fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: theme.color.header,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date().toString()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export { Calendar, MarkedDateProps, DayProps };
