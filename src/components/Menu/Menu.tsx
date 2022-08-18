import { Box, StackDivider, VStack } from "@chakra-ui/layout";
import React from "react";
import MenuConstants from "./MenuConstants";

interface MenuProps {
  currentDay: string;
  currentMeal: string;
}

export const Menu: React.FC<MenuProps> = ({ currentDay, currentMeal }) => {
  const d:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday" = currentDay as any;

  const m: "Breakfast" | "Lunch" | "Snacks" | "Dinner" = currentMeal as any;

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      {MenuConstants[d][m].map((dish) => (
        <Box key={dish}>{dish}</Box>
      ))}
    </VStack>
  );
};

export default Menu;
