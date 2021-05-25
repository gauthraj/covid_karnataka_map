const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1Ijoic29sdmVuaW5qYSIsImEiOiJja2RvbG90N3cxdGY5MnBxMzk4Z2lheDliIn0.Q-eCneFLLyn8dnVTfZ233Q",
  CSV: "https://docs.google.com/spreadsheets/d/1muJOzDeoKQatfp2n9rf37bTt2S5RI1pAvtRhpOv5dkU/gviz/tq?tqx=out:csv&sheet=Sheet1",
  center: [75.713890,15.317277],
  zoom: 6,
  title: "Covid Health Facilities",
  description:
    "List of all covid facilties in Karnataka",
  sideBarInfo: ["CVC Name", "Address", "District"],
  popupInfo: ["CVC Name"],
  filters: [
    {
      type: "dropdown",
      title: "Select District:",
      columnHeader: "District",
      listItems: [
        "Bagalkot",
        "Bangalore Rural",
        "Bangalore Urban",
        "BBMP",
        "Bellary",
        "Bidar",
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
