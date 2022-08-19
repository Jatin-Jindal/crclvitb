const defSnacks = ["Milk, Tea, Coffee"];
const defBreak = ["Bread, Butter, Jam", ...defSnacks, "Banana/Fruit Salad"];

const MenuConstants = {
  Monday: {
    Breakfast: [
      ...defBreak,
      "Idly, Vada, Sambhar",
      "Coconut/Tomato/Mint Chutney",
    ],
    Lunch: [
      "Mix Salad",
      "Green Vegetable",
      "Chapati",
      "Plain & Jeera Rice",
      "Rajma",
      "Onion Kara Kuzhanbu",
      "Fryums, Pickle",
      "Butter Milk",
    ],
    Snacks: ["Sweet or Masala Corn/Bhel Puri", "Tomato Sauce", ...defSnacks],
    Dinner: ["Chappati", "Rice", "Plain Dal", "Kadai Veg/Egg Curry"],
  },

  Tuesday: {
    Breakfast: [...defBreak, "Poha, Kichadi", "Jalebi"],
    Lunch: [
      "Cucumber Salad",
      "Aloo Dum",
      "Chapati",
      "Plain Rice",
      "Masoor Dal",
      "Bhindi/Bottle Gourd More Kuzuhambu/ Kadhi Pakoda",
      "Rasam, Pickle",
    ],
    Snacks: ["Pani Poori", ...defSnacks],
    Dinner: [
      "Chappati",
      "Pulao, Rice",
      "Dal Maharani",
      "Green Veg Gravy",
      "Payasam/Kheer",
    ],
  },

  Wednesday: {
    Breakfast: [...defBreak, "Paratha", "Aloo Gravy"],
    Lunch: [
      "Mix Salad",
      "Bhindi Masala",
      "Chapati",
      "Plain & Jeera Rice",
      "Dal Fry",
      "Vegetable Sambar",
      "Rasam",
      "Butter Milk",
    ],
    Snacks: ["Pakora/Samosa", "Tomato Sauce", ...defSnacks],
    Dinner: ["Chappati", "Rice", "Dal Tadka", "Paneer/Chicken Kadai", "Rasam"],
  },

  Thursday: {
    Breakfast: [
      ...defBreak,
      "Vermicelli/Rava/Atta Uppama",
      "Vada, Coconut Chutney",
    ],
    Lunch: [
      "Tomato Soup",
      "Loki dal ki sabji/Beetroot poriyal",
      "Chapati",
      "Plain Rice",
      "Panchmel Dal",
      "Drumstick Salad",
      "Rasam",
      "Curd",
    ],
    Snacks: ["Pav Bhaji", ...defSnacks],
    Dinner: [
      "Chappati",
      "Rice",
      "Dal Fry",
      "Green peas aloo masala",
      "Tomato/Hot & Sour Sauce",
    ],
  },

  Friday: {
    Breakfast: [...defBreak, "Uttapam", "Coconut/Onion and tomato chutney"],
    Lunch: [
      "Plain Biryani",
      "Veg 65/Veg Avial",
      "Chapati",
      "Plain Rice",
      "Rajma Masala",
      "Brinjal Kuzhambu",
      "Onion Raitha",
    ],
    Snacks: ["Dhokla", "Green Chutney", ...defSnacks],
    Dinner: [
      "Chapati",
      "Rice",
      "Rajma Masala",
      "Paneer do pyaza/Chicken curry",
      "Rasam",
    ],
  },

  Saturday: {
    Breakfast: [...defBreak, "Amritsari chole bhature", "Boiled Egg/Sprouts"],
    Lunch: [
      "Mixed Salad",
      "Aloo Matar",
      "Chapati",
      "Mint/Lemon/Tomato/Tamarind Rice",
      "Mong Dal",
      "Soya Masala",
      "Butter Milk",
    ],
    Snacks: ["Boiled Channa/Mung Bean", ...defSnacks],
    Dinner: [
      "Chappati",
      "Fried Rice",
      "Moong Masoor Fry",
      "Veg Manchurian",
      "Lentil/Veg Manchow Soup",
    ],
  },

  Sunday: {
    Breakfast: [
      ...defBreak,
      "Plain/Masala Dosa",
      "Sambar, Chilly & Tomato Chutney",
    ],
    Lunch: [
      "Cucumber Salad",
      "Bringal Gravy",
      "Chapati",
      "Chicken/Soya and vegetable biryani",
      "Paneer Butter Masala",
      "Onion Raita",
      "Lemon Juice",
    ],
    Snacks: ["Medu/Masala Vada", "Chutney", ...defSnacks],
    Dinner: ["Chappati", "Rice", "Bhindi Bhaji", "Dal Makhani", "Gulab Jamun"],
  },
};

export default MenuConstants;
