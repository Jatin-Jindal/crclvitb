import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import DayPicker from "./components/DayPicker/DayPicker";
import Menu from "./components/Menu/Menu";

export const App = () => {
  const today = new Date();
  const hrs = today.getHours();
  // Set day
  const [day, setDay] = React.useState(
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday ",
      "Thursday",
      "Friday",
      "Saturday",
    ][today.getDay()]
  );
  // Set meal
  const [meal, setMeal] = React.useState(
    hrs < 9 ? "Breakfast" : hrs < 14 ? "Lunch" : hrs < 18 ? "Snacks" : "Dinner"
  );

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8} style={{ justifyContent: "space-between" }}>
            <Menu currentDay={day} currentMeal={meal} />

            <DayPicker
              dayChanger={setDay}
              mealChanger={setMeal}
              currentMeal={meal}
              currentDay={day}
            />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
