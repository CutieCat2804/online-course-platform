import React, { useState } from "react";
import { DateObj, useDayzed } from "dayzed";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { Button } from "./ui/button";

const MONTHS = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const Calendar: React.FC<{ setOpen: (open: boolean) => void }> = ({
  setOpen,
}) => {
  const minDate = new Date(2020, 6, 1);
  const [date, setDate] = useState(new Date(2020, 6, 1));

  const onDateSelected = (options: { selectable: boolean; date: Date }) => {
    const { selectable, date } = options;
    if (!selectable || !date) return;
    setOpen(false);
    setDate(date);
  };

  const { calendars, getBackProps, getForwardProps, getDateProps } = useDayzed({
    date: minDate,
    selected: date,
    onDateSelected,
    showOutsideDays: true,
    minDate,
    firstDayOfWeek: 1,
  });

  return (
    <Box>
      {calendars.map((calendar, index) => (
        <Box key={index}>
          <Flex alignItems="center">
            <Button {...getBackProps({ calendars })} variant="ghost">
              Prev
            </Button>
            <Spacer />
            <Text fontSize="lg">{MONTHS[calendar.month]}</Text>
            <Spacer />
            <Button {...getForwardProps({ calendars })} variant="ghost">
              Next
            </Button>
          </Flex>
          {WEEKDAYS.map((day, index) => (
            <Box
              key={index}
              display="inline-block"
              width="calc(100% / 7)"
              textAlign="center"
              marginTop="12px"
            >
              {day}
            </Box>
          ))}
          <Box>
            {calendar.weeks.map((week) =>
              week.map((dateObj, index) => {
                if (!dateObj) {
                  return;
                }
                const { date, selected, selectable, nextMonth, prevMonth } =
                  dateObj as unknown as DateObj;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    {...getDateProps({
                      dateObj: dateObj as unknown as DateObj,
                    })}
                    display="inline-flex"
                    width="30px"
                    height="30px"
                    textAlign="center"
                    background={selected ? "blue.800" : "none"}
                    color={selected ? "white" : "#333"}
                    fontWeight={
                      (nextMonth || prevMonth) && selectable ? "400" : "700"
                    }
                    _hover={{ background: "blue.300", color: "#333" }}
                  >
                    {date.getDate()}
                  </Button>
                );
              })
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Calendar;
