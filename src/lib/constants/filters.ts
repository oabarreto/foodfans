export const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "br", label: "Brazil" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "jp", label: "Japan" },
] as const;

export const cities = {
  us: [
    { value: "ny", label: "New York" },
    { value: "la", label: "Los Angeles" },
    { value: "ch", label: "Chicago" },
  ],
  uk: [
    { value: "ld", label: "London" },
    { value: "mc", label: "Manchester" },
    { value: "bm", label: "Birmingham" },
  ],
  // Add more cities for other countries
} as const;

export const categories = {
  foods: [
    { id: "1", label: "Pizza" },
    { id: "2", label: "Burger" },
    { id: "3", label: "Pasta" },
    { id: "4", label: "Sushi" },
    { id: "5", label: "Tacos" },
    { id: "6", label: "Salad" },
    { id: "7", label: "Steak" },
    { id: "8", label: "Soup" },
    { id: "9", label: "Fries" },
    { id: "10", label: "Ice Cream" },
    { id: "11", label: "Donut" },
    { id: "12", label: "Cake" },
    { id: "13", label: "Sandwich" },
    { id: "14", label: "Chicken" },
    { id: "15", label: "Fish" },
    { id: "16", label: "Shrimp" },
    { id: "17", label: "Pancakes" },
    { id: "18", label: "Waffles" },
    { id: "19", label: "Brownie" },
    { id: "20", label: "Hot Dog" },
    { id: "21", label: "Lasagna" },
    { id: "22", label: "Ramen" },
    { id: "23", label: "Burrito" },
    { id: "24", label: "Curry" },
    { id: "25", label: "Dumplings" },
    { id: "26", label: "Toast" },
    { id: "27", label: "Cheesecake" },
    { id: "28", label: "Cupcake" },
    { id: "29", label: "Muffin" },
    { id: "30", label: "Barbecue" },
    { id: "31", label: "Kebab" },
    { id: "32", label: "Falafel" },
    { id: "33", label: "Paella" },
    { id: "34", label: "Churros" },
    { id: "35", label: "Quiche" },
    { id: "36", label: "Casserole" },
    { id: "37", label: "Crepes" },
    { id: "38", label: "Omelette" },
    { id: "39", label: "Bagel" },
    { id: "40", label: "Granola" },
  ],
} as const;
