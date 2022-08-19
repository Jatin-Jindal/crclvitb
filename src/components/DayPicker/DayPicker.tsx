import { Button, ButtonGroup, VStack } from "@chakra-ui/react";
import React from "react";

const dayStyle = {
  borderRadius: "0.5rem",
  padding: "0px",
  margin: "0px",
  width: "100%",
  opacity: "0.5",
  fontWeight: "normal",
};
const activeStyle = {
  ...dayStyle,
  opacity: "1.0",
  fontWeight: "bolder",
};

interface DayPickerProps {
  dayChanger: React.Dispatch<React.SetStateAction<string>>;
  mealChanger: React.Dispatch<React.SetStateAction<string>>;
  currentMeal?: string;
  currentDay?: string;
  style?: React.CSSProperties;
}

export const DayPicker: React.FC<DayPickerProps> = ({
  dayChanger,
  mealChanger,
  currentDay,
  currentMeal,
  style,
}) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const meals = ["Breakfast", "Lunch", "Snacks", "Dinner"];
  return (
    <VStack spacing={1} w="100%" style={style}>
      <ButtonGroup gap="4px" w="100%">
        {meals.map((meal) => (
          <Button
            key={meal}
            style={meal === currentMeal ? activeStyle : dayStyle}
            onClick={() => mealChanger(meal)}
          >
            {meal}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup gap="4px" w="100%">
        {days.map((day) => (
          <Button
            key={day}
            style={day === currentDay ? activeStyle : dayStyle}
            onClick={() => dayChanger(day)}
          >
            {day[0]}
          </Button>
        ))}
      </ButtonGroup>
    </VStack>
  );
};

export default DayPicker;
