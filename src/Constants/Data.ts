import { icons } from "./Icons";
import { images } from "./Images";

export const featureList = [
  {
    id: 1,
    title: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esseillum dolore.",
    imgUrl: images.cardpic1,
    top: "80px",
    bgcolor: "yellow",
  },
  {
    id: 2,
    title: "Feature 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esseillum dolore.",
    imgUrl: images.cardpic1,
    top: "145px",
    bgcolor: "red",
  },
  {
    id: 3,
    title: "Feature 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esseillum dolore.",
    imgUrl: images.cardpic1,
    top: "210px",
    bgcolor: "green",
  },
  {
    id: 4,
    title: "Feature 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esseillum dolore.",
    imgUrl: images.cardpic1,
    top: "275px",
    bgcolor: "blue",
  },
  {
    id: 5,
    title: "Feature 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esseillum dolore.",
    imgUrl: images.cardpic1,
    top: "340px",
    bgcolor: "orange",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How can I create an account?",
    answer:
      "To create an account with us, download HER for free from either the Google Play Store or Apple App Store. Once downloaded, you can create an account using your Apple Login (if you have an iOS device), Facebook, Instagram, or Phone number.",
  },
  {
    id: 2,
    question: "Is this app free?",
    answer:
      "All of HER's core features are completely free, so finding your person or your community is accessible to everyone. With the free version of the app, you can add friends, view profiles, start chats, view events, and join communities.",
  },
  {
    id: 3,
    question: "What countries is HER available in?",
    answer:
      "HER serves 10M+ lesbian, bi, queer, non-binary, trans, gender non-conforming folx as they build the community of people they can call home. We are available in 125+ different countries and locally available in English, Spanish, French, German, and Japanese.",
  },
  {
    id: 4,
    question: "Can I delete my account?",
    answer:
      "Yes, you can delete your account anytime from the account settings page. Once deleted, all your information will be permanently removed from our servers.",
  },
  {
    id: 5,
    question: "Is my data secure?",
    answer:
      "Absolutely. We use modern encryption methods to ensure your personal data and messages remain secure and private at all times.",
  },
  {
    id: 6,
    question: "How can I contact support?",
    answer:
      "You can reach out to our support team anytime through the in-app Help section or via email. We respond within 24 hours on business days.",
  },
];

export const homeNavLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Policies",
    url: "/policies",
  },
  {
    id: 4,
    title: "Investors",
    url: "/investor",
  },
  {
    id: 7,
    title: "Contact Us",
    url: "/contact",
  },
];
export const aboutSideNav = [
  {
    id: 1,
    title: "Our Mission",
    url: "/about",
    iconblack: icons.misionBlack,
    iconwhite: icons.missionWhite,
  },
  {
    id: 2,
    title: "Our Story",
    url: "/about/our-story",
    iconblack: icons.storyBlack,
    iconwhite: icons.storyWhite,
  },
  {
    id: 3,
    title: "Team",
    url: "/about/team",
    iconblack: icons.teamBlack,
    iconwhite: icons.teamWhite,
  },
  {
    id: 4,
    title: "Value & Culture",
    url: "/about/value-culture",
    iconblack: icons.cultureWhite,
    iconwhite: icons.cultureBlack,
  },
  {
    id: 5,
    title: "Achievements",
    url: "/about/achievements",
    iconblack: icons.achievementBlack,
    iconwhite: icons.achievementWhite,
  },
];
export const policiesSideNav = [
  {
    id: 1,
    title: "Privacy Policy",
    url: "/policies",
    iconblack: icons.privacyBlack,
    iconwhite: icons.privacyWhite,
  },
  {
    id: 2,
    title: "Terms & Conditions",
    url: "/policies/conditions",
    iconblack: icons.tcBlack,
    iconwhite: icons.tcWhite,
  },
  {
    id: 3,
    title: "Community Guidelines",
    url: "/policies/guidelines",
    iconblack: icons.guideBlack,
    iconwhite: icons.guideWhite,
  },
  {
    id: 4,
    title: "Refund Policy",
    url: "/policies/refund",
    iconblack: icons.refundBlack,
    iconwhite: icons.refundWhite,
  },
  {
    id: 5,
    title: "Safety Policy",
    url: "/policies/safety",
    iconblack: icons.safetyBlack,
    iconwhite: icons.safetyWhite,
  },
];
export const investorSideNav = [
  {
    id: 1,
    title: "Company Overview",
    url: "/investor",
     iconblack: icons.overviewBlack,
    iconwhite: icons.overviewWhite,
  },
  {
    id: 2,
    title: "Market Opportunity",
    url: "/investor/opportunity",
     iconblack: icons.opportunityBlack,
    iconwhite: icons.opportunityWhite,
  },
  {
    id: 3,
    title: "Problem & Solution",
    url: "/investor/problem-solution",
     iconblack: icons.solutionBlack,
    iconwhite: icons.solutionWhite,
  },
  {
    id: 4,
    title: "Financial Snapshot",
    url: "/investor/financial-snapshot",
     iconblack: icons.financialBlack,
    iconwhite: icons.financialWhite,
  },
  {
    id: 5,
    title: "Investor Contact",
    url: "/investor/contact",
     iconblack: icons.investorContactBlack,
    iconwhite: icons.investorContactWhite,
  },
];
export const legalFooterNav = [
    {
    id: 1,
    title: "Privacy Policy",
    url: "/policies",
  },
  {
    id: 2,
    title: "Terms & conditions",
    url: "/Policies/conditions",
  },
  {
    id: 3,
    title: "Refund Policy",
    url: "/policies/refund",
  },
];
export const communityFooterNav = [
  {
    id: 1,
    title: "Community Guidelines",
    url: "/policies/guidelines",
  },
  {
    id: 2,
    title: "Safety Policy",
    url: "/policies/safety",
  },
  {
    id: 3,
    title: "Blogs",
    url: "/blogs",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];
export const companyFooterNav = [
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Team",
    url: "/about/team",
  },
  {
    id: 3,
    title: "Investor",
    url: "/investor",
  },
  {
    id: 4,
    title: "Career",
    url: "/careers",
  },
]