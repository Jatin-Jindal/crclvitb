const defSnacks = ["Milk, Tea, Coffee"];
const defBreak = ["Bread, Butter, Jam", ...defSnacks, "Banana/Fruit Salad"];

const MenuConstants = {
  Monday: {
    Breakfast: [
      ...defBreak,
      "Idly, Vada, Sambhar",
      "Chutney",
      "Boiled Egg/Sprouts",
    ],
    Lunch: [
      "Salad",
      "Green Vegetable",
      "Chapati",
      "Plain & Jeera Rice",
      "Kadi Pakora",
      "Onion Kara Kuzhanbu",
      "Fryums, Pickle",
      "Jaljeera",
    ],
    Snacks: ["Dahi Vada/Aloo Vada", "Tomato Sauce", ...defSnacks],
    Dinner: [
      "Chappati",
      "Jeera Rice",
      "Plain Dal",
      "Mix Veg",
      "Egg Curry",
      "Rasam",
    ],
  },

  Tuesday: {
    Breakfast: [...defBreak, "Poha", "Jalebi"],
    Lunch: [
      "Bhoondi Raita",
      "Aloo Dum",
      "Chapati",
      "Plain Rice",
      "Masoor Dal",
      "Bottle Gourd Kuzuhambu",
      "Rasam",
      "Suji Halwa/Sweet Boondi",
    ],
    Snacks: ["Pani Poori", ...defSnacks],
    Dinner: ["Chappati", "Rice", "Dal Tadka", "Kala Chana Masala", "Rasam"],
  },

  Wednesday: {
    Breakfast: [...defBreak, "Pav/Upma", "Bhaji/Coconut Chutney"],
    Lunch: [
      "Salad",
      "Veg Kofta",
      "Chapati",
      "Jeera Rice",
      "Dal Fry",
      "Vegetable Sambar",
      "Rasam",
      "Fryyums",
    ],
    Snacks: ["Samosa/Kachodi", "Sauce", ...defSnacks],
    Dinner: [
      "Chappati",
      "Rice",
      "Plain Dal",
      "Paneer/Chicken Kadai",
      "Hot & Sour Soup",
    ],
  },

  Thursday: {
    Breakfast: [...defBreak, "Puri/Bhature", "Bhaji/Chole"],
    Lunch: [
      "Tomato Soup",
      "Aloo Gobhi/Aloo Matar",
      "Chapati",
      "Plain Rice",
      "Dal Fry",
      "Louki More",
      "Pickle",
      "Rasam",
    ],
    Snacks: ["Sweet Corn/Bhel", ...defSnacks],
    Dinner: [
      "Chappati",
      "Jeera Rice",
      "Dal Fry",
      "Green Vegetable",
      "Rasam",
      "Payasam/Kheer/Sewaiya",
    ],
  },

  Friday: {
    Breakfast: [
      ...defBreak,
      "Plain/Carrot/Tomato Uttapam",
      "Coconut/Onion and tomato chutney",
    ],
    Lunch: [
      "Plain Biryani",
      "Veg Avial",
      "Chapati",
      "Plain Rice",
      "Rajma Masala",
      "Brinjal Kuzhambu",
      "Onion Raitha",
      "Fryums",
    ],
    Snacks: ["Dhokla", "Sauce", ...defSnacks],
    Dinner: ["Chapati", "Rice", "Dal Tadka", "Paneer do pyaza/Chicken curry"],
  },

  Saturday: {
    Breakfast: [
      ...defBreak,
      "Plain/Masala/Atta Paratha",
      "Bhaji/Curd/Pickle",
      "Boiled Egg/Sprouts",
    ],
    Lunch: [
      "Butter Milk",
      "Sev Tomato",
      "Chapati",
      "Tomato Rice/Veg Pulao",
      "Mong Dal",
      "Soya Masala",
      "Rasam",
    ],
    Snacks: ["Noodles/Boiled Channa", ...defSnacks],
    Dinner: [
      "Chappati",
      "Fried Rice",
      "Cowpea Masala",
      "Veg Manchurian",
      "Veg Manchow Soup",
    ],
  },

  Sunday: {
    Breakfast: [...defBreak, "Masala Dosa", "Sambar, Chutney"],
    Lunch: [
      "Onion Salad",
      "Bringal Gravy",
      "Chapati",
      "Chicken/Veg biryani",
      "Paneer Butter Masala",
      "Burhani Raita",
    ],
    Snacks: ["Mix Pakoda", ...defSnacks],
    Dinner: ["Chappati", "Rice", "Bhindi Bhaji", "Dal Makhani", "Gulab Jamun"],
  },
};

export default MenuConstants;
