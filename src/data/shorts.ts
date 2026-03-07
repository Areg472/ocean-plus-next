export interface Short {
  id: string;
  title: string;
  year: string;
  creator: string;
  image?: string;
  shortLink: string;
}

export const shorts: Short[] = [
  {
    id: "carlos-birthday-gone-wrong",
    title: "Carlos Birthday Gone Wrong",
    year: "February 23rd, 2024",
    creator: "Carlo Bear",
    image: "/ContentImages/carlo-bday.png",
    shortLink: process.env.PUBLIC_SHORT_LINK_CARLOS_BIRTHDAY_GONE_WRONG,
  },
  {
    id: "maskmas",
    title: "Maskmas",
    year: "December 24th, 2023",
    creator: "Carlo Bear",
    image: "/ContentImages/maskmas.png",
    shortLink: process.env.PUBLIC_SHORT_LINK_MASKMAS,
  },
  {
    id: "new-turkey-eve",
    title: "New Turkey Eve",
    year: "December 31st, 2024",
    creator: "Carlo Bear",
    image: "/ContentImages/new-turkey-eve.jpg",
    shortLink: process.env.PUBLIC_SHORT_LINK_TURKEY,
  },
  {
    id: "steamboat-willie",
    title: "Steamboat Willie",
    year: "November 18th, 1928",
    creator: "Walt Disney Studios",
    image: "/ContentImages/steamboat-willie.png",
    shortLink: process.env.PUBLIC_SHORT_LINK_STEAMBOAT_WILLIE,
  },
  {
    id: "the-random-green-blah-blah-thing",
    title: "The Random Green Blah Blah Thing",
    year: "March 17th, 2025",
    creator: "Carlo Bear",
    image: "/ContentImages/blah-blah.jpg",
    shortLink: process.env.PUBLIC_SHORT_LINK_BLA_BLA,
  },
];
