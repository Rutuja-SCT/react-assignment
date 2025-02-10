import {
    Edit,
    Download,
    Description,
    CameraAlt,
    Email,
    Home
  } from "@mui/icons-material";

export const TotalCustomersData = {
    "customers": 68192,
    "growthPercentage": 37.8,
    "comparisonDate": "Sep 8, 2021",
    "chartData": [
        { month: "Jan", "2022": 8.1, "2023": 8.0 },
        { month: "Feb", "2022": 8.2, "2023": 8.05 },
        { month: "Mar", "2022": 8.3, "2023": 8.1 },
        { month: "Apr", "2022": 8.4, "2023": 8.15 },
        { month: "May", "2022": 8.45, "2023": 8.2 },
        { month: "Jun", "2022": 8.3, "2023": 8.18 },
        { month: "Jul", "2022": 8.25, "2023": 8.22 },
        { month: "Aug", "2022": 8.28, "2023": 8.25 },
        { month: "Sep", "2022": 8.35, "2023": 8.3 },
        { month: "Oct", "2022": 8.38, "2023": 8.33 },
        { month: "Nov", "2022": 8.4, "2023": 8.36 },
        { month: "Dec", "2022": 8.5, "2023": 8.4 }
      ],
    "messages": {
      "totalCustomers": 291,
      "customersList": [
        { "name": "Courtney Henry", "image": "courtney.jpg" },
        { "name": "Jenny Wilson", "image": "jenny.jpg" },
        { "name": "Cameron Williamson", "image": "cameron.jpg" }
      ]
    }
  }
  export const ProductViewsData = {
    "chartTitle": "Product views",
    "data": [
      { "month": "Jan", "LifetimeValue": 8.7, "CustomerCost": 8.5 },
      { "month": "Feb", "LifetimeValue": 8.4, "CustomerCost": 8.6 },
      { "month": "Mar", "LifetimeValue": 8.5, "CustomerCost": 8.1 },
      { "month": "Apr", "LifetimeValue": 8.1, "CustomerCost": 8.2 },
      { "month": "May", "LifetimeValue": 8.8, "CustomerCost": 8.3 },
      { "month": "Jun", "LifetimeValue": 8.6, "CustomerCost": 8.2 }
    ]
  }

  export const ProTipsData = [
    {
      icon: <Edit sx={{ fontSize: 30 }} />,
      title: "Early access",
      badge: { label: "New", color: "primary" },
      date: "Aug 15",
      userAvatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      icon: <Download sx={{ fontSize: 30 }} />,
      title: "Exclusive downloads",
      badge: null,
      date: "Jun 23",
      userAvatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      icon: <Description sx={{ fontSize: 30 }} />,
      title: "Asset use guidelines",
      badge: { label: "Popular", color: "success" },
      date: "Dec 30",
      userAvatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      icon: <CameraAlt sx={{ fontSize: 30 }} />,
      title: "Behind the scenes",
      badge: { label: "Hot", color: "error" },
      date: "Sep 4",
      userAvatar: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      icon: <Email sx={{ fontSize: 30 }} />,
      title: "Asset use guidelines",
      badge: { label: "The most", color: "warning" },
      date: "Mar 5",
      userAvatar: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      icon: <Home sx={{ fontSize: 30 }} />,
      title: "Life & work updates",
      badge: null,
      date: "Nov 10",
      userAvatar: "https://randomuser.me/api/portraits/men/6.jpg"
    }
  ];

  // Dummy Data
export const NewCustomerData = [
    { name: "New customer", value: 20000, color: "#fbc02d" }, // Yellow
    { name: "Returning customer", value: 50000, color: "#9575cd" }, // Purple
    { name: "Lost customer", value: 10000, color: "#ef9a9a" } // Light Red
];
export const CommentsData = [
    {
      id: 1,
      name: "Annette Black",
      username: "edwards",
      date: "Apr 11",
      avatar: "https://i.pravatar.cc/40?img=1",
      product: "Gray vintage 3D computer",
      comment: "Great work",
    },
    {
      id: 2,
      name: "Devon Lane",
      username: "cooper",
      date: "May 22",
      avatar: "https://i.pravatar.cc/40?img=2",
      product: "Gray vintage 3D computer",
      comment: "I need react version asap!",
    },
    {
      id: 3,
      name: "Marvin McKinney",
      username: "theresaMar5",
      date: "Mar 5",
      avatar: "https://i.pravatar.cc/40?img=3",
      product: "Pastel abstraction",
      comment: "How can I buy only the design?",
    },
  ];
  export const ProductsData = [
    {
      id: 1,
      name: "Gray vintage 3D computer",
      price: "$7,750.88",
      status: "Declined",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      name: "Virtual reality visual sphere",
      price: "$3,250.13",
      status: "Active",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      name: "3D dark mode wallpaper",
      price: "$4,750.17",
      status: "Pending",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 4,
      name: "3D soothing wallpaper 4",
      price: "$2,000.47",
      status: "Active",
      image: "https://via.placeholder.com/40",
    },
  ];