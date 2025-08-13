export interface mail {
  name: string;
  description: string;
  mailContent: string;
  isRead: boolean;
  date: string;
}

export interface mailSections {
  id: number;
  name: string;
  mailCount: number;
  mails: mail[];
}

export const mailData: mailSections[] = [
  {
    id: 1,
    name: "Primary",
    mailCount: 2,
    mails: [
      {
        name: "diwali",
        description: "Happy Diwali",
        mailContent: "Wish u a very happy diwali",
        isRead: false,
        date: "15-11-2023",
      },
      {
        name: "pongal",
        description: "Happy pongal",
        mailContent: "Wish u a very happy pongal",
        isRead: false,
        date: "14-11-2023",
      },
    ],
  },
  {
    id: 2,
    name: "Promotions",
    mailCount: 2,
    mails: [
      {
        name: "Max",
        description: "Fashion Sale 50% off",
        mailContent: "Max 50% offer,Buy 2 get 1",
        isRead: false,
        date: "15-11-2023",
      },
      {
        name: "Trends",
        description: "Fashion Sale 30% off",
        mailContent: "Fashion Sale 30% on Trends products,Buy 1 get 1",
        isRead: false,
        date: "14-11-2023",
      },
    ],
  },
  {
    id: 3,
    name: "Social",
    mailCount: 2,
    mails: [
      {
        name: "Linkedin",
        description: "4 people noticed you",
        mailContent:
          "4 people noticed your account and here are those aa, bb,cc,dd",
        isRead: false,
        date: "15-11-2023",
      },
      {
        name: "Linkedin",
        description: "Intern opportunities",
        mailContent: "Join the intern to get a sturdy career",
        isRead: false,
        date: "14-11-2023",
      },
    ],
  },
];
