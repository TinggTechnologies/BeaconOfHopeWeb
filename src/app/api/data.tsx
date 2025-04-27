import { PiggyBank, CreditCard, ShieldCheck, ShoppingCart } from "lucide-react";

export const FeaturesData: {
  icon: JSX.Element;
  heading: string;
  subheading: string;
}[] = [
  {
    icon: <PiggyBank size={40} />, // Icon for savings & investments
    heading: "Smart Savings & Investments",
    subheading: "Save and invest effortlessly with high returns.",
  },
  {
    icon: <CreditCard size={40} />, // Icon for loans & credit
    heading: "Instant Loans & Credit Access",
    subheading: "Get instant loans with flexible repayment options.",
  },
  {
    icon: <ShieldCheck size={40} />, // Icon for secure banking
    heading: "Secure Digital Banking",
    subheading: "Transfer funds, pay bills, and manage your account securely.",
  },
  {
    icon: <ShoppingCart size={40} />, // Icon for marketplace
    heading: "Marketplace & Services",
    subheading: "Connect with members to trade goods and services.",
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
