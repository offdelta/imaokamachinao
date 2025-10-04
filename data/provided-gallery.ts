export type ProvidedContributorMeta = {
  key: string;
  displayName: {
    ja: string;
    en: string;
  };
  sns?: Array<{
    service?: "instagram" | "x" | "facebook" | "website" | "threads" | "other";
    label: string;
    url: string;
  }>;
  note?: {
    ja?: string;
    en?: string;
  };
  aliases?: string[];
};

export const providedContributorMeta: ProvidedContributorMeta[] = [
  {
    key: "fujimax",
    displayName: {
      ja: "fujimax さん",
      en: "fujimax",
    },
    sns: [
      {
        service: "x",
        label: "@fujimax6",
        url: "https://x.com/fujimax6?s=11",
      },
    ],
    note: {
      ja: "ちょうど町直さんの鉢を使った席飾りをさせて頂いている最中です！☺️",
      en: "We are in the middle of styling a table arrangement with a Machinao pot! ☺️",
    },
  },
  {
    key: "tanaka",
    displayName: {
      ja: "tanaka さん",
      en: "tanaka",
    },
    note: {
      ja: "観賞用として自宅に飾っております。富士山の模様に惚れ込みました",
      en: "I display it at home for appreciation—the Mt. Fuji motif captured my heart.",
    },
  },
  {
    key: "松本ミル",
    displayName: {
      ja: "松本ミル さん",
      en: "Matsumoto Miru",
    },
    sns: [
      {
        service: "x",
        label: "@matsumoto_mill",
        url: "https://x.com/matsumoto_mill?s=11",
      },
    ],
    note: {
      ja: "私も何鉢か使わせて頂いております。",
      en: "I have had the pleasure of using several of Machinao's pots as well.",
    },
  },
  {
    key: "領suibonsai",
    aliases: ["領"],
    displayName: {
      ja: "領 suibonsai さん",
      en: "Ryo suibonsai",
    },
    sns: [
      {
        service: "x",
        label: "@sui_bonsai",
        url: "https://x.com/sui_bonsai?s=11",
      },
    ],
    note: {
      ja: "私が持っていた町直氏の鉢です。",
      en: "This is the Machinao pot that I have kept with me.",
    },
  },
];
