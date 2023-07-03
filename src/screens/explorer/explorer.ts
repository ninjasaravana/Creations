export type fileStruct = {
  name: string;
  isFolder: boolean;
  items?: fileStruct[];
};

export var explorerStructure: fileStruct[] = [
  {
    name: "public",
    isFolder: true,
    items: [
      {
        name: "index.html",
        isFolder: false,
      },
      {
        name: "logo.svg",
        isFolder: false,
      },
    ],
  },
  {
    name: "src",
    isFolder: true,
    items: [
      {
        name: "components",
        isFolder: true,
        items: [
          {
            name: "Button.tsx",
            isFolder: false,
          },
          {
            name: "Button.css",
            isFolder: false,
          },
        ],
      },
      {
        name: "screen",
        isFolder: true,
        items: [
          {
            name: "home.tsx",
            isFolder: false,
          },
          {
            name: "home.css",
            isFolder: false,
          },
        ],
      },
      {
        name: "styles.ts",
        isFolder: false,
      },
    ],
  },
];
