const menuList = [
  { label: "HOME", to: "/" },
  {
    label: "PROFILE",
    to: "/PROFILE",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "location",
            to: "location",
          },
        ],
      },
    ],
  },
  {
    label: "SETTINGS",
    to: "/SETTINGS",
    children: [
      {
        label: "Account",
        to: "account",
        children: [
          { label: "login", to: "login" },
          { label: "signup", to: "signup" },
        ],
      },
    ],
  },
];

export default menuList;
