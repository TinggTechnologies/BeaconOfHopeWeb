import { Smartphone, Tv2, ShieldCheck, ShoppingCart } from "lucide-react";

export const FeaturesData: {
  icon: JSX.Element;
  heading: string;
  subheading: string;
}[] = [
  {
    icon: <Smartphone size={40} />, // Icon for airtime and data
    heading: "Airtime & Data Recharge",
    subheading: "Top up any network instantly with just a few taps.",
  },
  {
    icon: <Tv2 size={40} />, // Icon for cable TV
    heading: "Cable TV Payments",
    subheading: "Pay for DSTV, GOTV, and more without hassle.",
  },
  {
    icon: <ShieldCheck size={40} />, // Icon for secure transactions
    heading: "Fast & Secure Payments",
    subheading: "Enjoy quick and secure bill payment experiences.",
  },
  {
    icon: <ShoppingCart size={40} />, // Icon for marketplace
    heading: "Marketplace & Services",
    subheading: "Buy and sell goods or services within your community.",
  },
];



export const ExpertData: {
  profession: string;
  name: string;
  imgSrc: string;
}[] = [
    {
      profession: 'Top up airtime in seconds',
      name: 'Get discounted rates on airtime for MTN, AIRTEL, GLO, and 9 MOBILE',
      imgSrc: '/images/Expert/phone.png',
    },
    {
      profession: 'Stay Connected',
      name: 'Never run out of data again. Get affordable plans for all networks',
      imgSrc: '/images/Expert/antenna.png',
    },
    {
      profession: 'Endless Entertainment',
      name: 'Subscribe to DSTV & GOTv packages in a few clicks. Relax, we’ve got you covered.',
      imgSrc: '/images/Expert/connected.png',
    },
    {
      profession: 'Keep Your Lights On',
      name: 'Pay your prepaid or postpaid electricity bills easily, anytime, anywhere.',
      imgSrc: '/images/Expert/light.png',
    },

  ]

// data.tsx
export const galleryImages = [
  { src: '/images/Gallery/foodone.jpg', name: 'Caesar Salad(187 Kcal)', price: 35 },
  { src: '/images/Gallery/foodtwo.jpg', name: 'Christmas salad(118 Kcal)', price: 17 },
  { src: '/images/Gallery/foodthree.jpg', name: 'Sauteed mushrooms with pumpkin and sweet pepper(238 kcal)', price: 45 },
  { src: '/images/Gallery/foodfour.jpg', name: 'BBQ Chicken Feast Pizza(272 kcal)', price: 27 },
];
