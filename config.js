const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1Ijoic29sdmVuaW5qYSIsImEiOiJja2RvbG90N3cxdGY5MnBxMzk4Z2lheDliIn0.Q-eCneFLLyn8dnVTfZ233Q",
  CSV: "https://docs.google.com/spreadsheets/d/1muJOzDeoKQatfp2n9rf37bTt2S5RI1pAvtRhpOv5dkU/gviz/tq?tqx=out:csv&sheet=Sheet1",
  center: [-120.234, 47.398],
  zoom: 6,
  title: "Covid Health Facilities",
  description:
    "",
  sideBarInfo: ["CVC Name", "Address", "District"],
  popupInfo: ["CVC Name"],
  filters: [
    {
      type: "dropdown",
      title: "Select District:",
      columnHeader: "District",
      listItems: [
        "Bagalkot",
        "ASL",
        "Cambodian",
        "Chinese",
        "Danish",
        "English",
        "French",
        "German",
        "Greek",
        "Hindi",
        "Italian",
        "Japanese",
        "Korean",
        "Language Line Services",
        "Norwegian",
        "Oriya",
        "Portuguese",
        "Punjabi",
        "Russian",
        "Somali",
        "Spanish",
        "Swedish",
        "Tagalog",
        "Thai",
        "Tigrinya",
        "Tongan",
        "Vietnamese",
        "Ukranian",
      ],
    },
    /*{
      type: "checkbox",
      title: "Devices available: ",
      columnHeader: "Devices_available", // Case sensitive - must match spreadsheet entry
      listItems: ["Computer", "Wi-Fi", "Adaptive Laptops"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },*/
   /* {
      type: "dropdown",
      title: "Clients: ",
      columnHeader: "Clients",
      listItems: [
        "Adults",
        "Disabled",
        "Homeless",
        "Immigrants/Refugees",
        "Low Income",
        "Seniors",
        "Youth: Pre-teen",
        "Youth: Teen",
      ],
    },*/
  ],
};
