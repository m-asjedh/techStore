const products = [
  {
    id: 1,
    productName: "Sony WF-1000XM4",
    price: 280,
    brand: "Sony",
    category: "Buds",
    image: "/src/assets/buds1.webp",
    description:
      "Sony WF-1000XM4 offers industry-leading noise cancellation in a compact earbud form. With exceptional sound quality, 8-hour battery life, and Alexa integration, it’s perfect for on-the-go music enthusiasts.",
    quantity: 20,
  },
  {
    id: 2,
    productName: "Apple AirPods Pro 2",
    price: 250,
    brand: "Apple",
    category: "Buds",
    image: "/src/assets/buds2.webp",
    description:
      "The second generation of Apple's AirPods Pro offers enhanced ANC, Transparency mode, and spatial audio with a comfortable fit for a superior listening experience.",
    quantity: 15,
  },
  {
    id: 3,
    productName: "Samsung Galaxy Buds2 Pro",
    price: 230,
    brand: "Samsung",
    category: "Buds",
    image: "/src/assets/buds3.webp",
    description:
      "Galaxy Buds2 Pro features high-fidelity sound, ANC, and seamless device integration, making them ideal for Samsung users seeking premium audio.",
    quantity: 10,
  },
  {
    id: 4,
    productName: "Jabra Elite 7 Active",
    price: 200,
    brand: "Jabra",
    category: "Buds",
    image: "/src/assets/buds4.webp",
    description:
      "Jabra Elite 7 Active earbuds provide exceptional sound quality, ANC, and a secure fit, ideal for workouts and daily use.",
    quantity: 12,
  },

  {
    id: 5,
    productName: "Beats Flex Wireless Earphones",
    price: 70,
    brand: "Beats",
    category: "Earphones",
    image: "/src/assets/earphones1.webp",
    description:
      "Beats Flex offers a lightweight, magnetic design with great sound quality and seamless integration with Apple devices.",
    quantity: 25,
  },
  {
    id: 6,
    productName: "Bose SoundSport Wireless",
    price: 150,
    brand: "Bose",
    category: "Earphones",
    image: "/src/assets/earphones2.webp",
    description:
      "Bose SoundSport Wireless earphones deliver powerful sound and a comfortable fit, perfect for workouts and running.",
    quantity: 18,
  },
  {
    id: 7,
    productName: "OnePlus Bullets Wireless Z2",
    price: 60,
    brand: "OnePlus",
    category: "Earphones",
    image: "/src/assets/earphones3.webp",
    description:
      "OnePlus Bullets Wireless Z2 offers incredible battery life and quick charging for uninterrupted music sessions.",
    quantity: 30,
  },
  {
    id: 8,
    productName: "Sennheiser CX 350BT",
    price: 100,
    brand: "Sennheiser",
    category: "Earphones",
    image: "/src/assets/earphones4.webp",
    description:
      "Sennheiser CX 350BT earphones provide high-quality sound, durable design, and Bluetooth multipoint connectivity.",
    quantity: 15,
  },

  {
    id: 9,
    productName: "Sony WH-1000XM5",
    price: 350,
    brand: "Sony",
    category: "Headphones",
    image: "/src/assets/headphones1.webp",
    description:
      "The Sony WH-1000XM5 offers industry-leading noise cancellation and superior sound quality for immersive listening.",
    quantity: 10,
  },
  {
    id: 10,
    productName: "Bose QuietComfort 45",
    price: 330,
    brand: "Bose",
    category: "Headphones",
    image: "/src/assets/headphones2.webp",
    description:
      "Bose QuietComfort 45 headphones provide excellent noise cancellation and premium comfort for extended listening sessions.",
    quantity: 8,
  },
  {
    id: 11,
    productName: "Sennheiser HD 450BT",
    price: 200,
    brand: "Sennheiser",
    category: "Headphones",
    image: "/src/assets/headphones3.webp",
    description:
      "Sennheiser HD 450BT headphones deliver great sound quality, ANC, and a lightweight design at an affordable price.",
    quantity: 12,
  },

  {
    id: 12,
    productName: "JBL Flip 6",
    price: 130,
    brand: "JBL",
    category: "Speakers",
    image: "/src/assets/speaker1.webp",
    description:
      "The JBL Flip 6 delivers powerful sound with deep bass, ideal for outdoor adventures and parties.",
    quantity: 20,
  },
  {
    id: 13,
    productName: "Ultimate Ears BOOM 3",
    price: 150,
    brand: "Ultimate Ears",
    category: "Speakers",
    image: "/src/assets/speaker2.webp",
    description:
      "UE BOOM 3 offers 360-degree sound, waterproof design, and long battery life for on-the-go audio.",
    quantity: 18,
  },

  {
    id: 14,
    productName: "Samsung Galaxy Watch 5",
    price: 300,
    brand: "Samsung",
    category: "Watches",
    image: "/src/assets/watch1.webp",
    description:
      "Samsung Galaxy Watch 5 features advanced health tracking, GPS, and over 90 workout modes for fitness enthusiasts.",
    quantity: 8,
  },
  {
    id: 15,
    productName: "Apple Watch Series 8",
    price: 400,
    brand: "Apple",
    category: "Watches",
    image: "/src/assets/watch2.webp",
    description:
      "The Apple Watch Series 8 offers advanced health monitoring, ECG, and seamless integration with Apple devices.",
    quantity: 10,
  },
  {
    id: 16,
    productName: "Fitbit Versa 4",
    price: 230,
    brand: "Fitbit",
    category: "Watches",
    image: "/src/assets/watch3.webp",
    description:
      "Fitbit Versa 4 is a fitness-focused smartwatch with heart rate tracking, GPS, and sleep monitoring.",
    quantity: 15,
  },

  {
    id: 17,
    productName: "Sony LinkBuds S",
    price: 180,
    brand: "Sony",
    category: "Wireless Earphones",
    image: "/src/assets/wireless_earphones1.webp",
    description:
      "Sony LinkBuds S offers high-quality sound, ANC, and a compact design for comfortable all-day use.",
    quantity: 14,
  },
  {
    id: 18,
    productName: "Anker Soundcore Liberty Air 2 Pro",
    price: 130,
    brand: "Anker",
    category: "Wireless Earphones",
    image: "/src/assets/wireless_earphones2.webp",
    description:
      "Anker Soundcore Liberty Air 2 Pro delivers excellent sound quality, customizable ANC, and great battery life.",
    quantity: 20,
  },
  {
    id: 19,
    productName: "Jabra Elite 75t",
    price: 150,
    brand: "Jabra",
    category: "Wireless Earphones",
    image: "/src/assets/wireless_earphones3.webp",
    description:
      "Jabra Elite 75t earbuds offer premium sound, ANC, and a secure fit, perfect for active lifestyles.",
    quantity: 16,
  },
];

export default products;
