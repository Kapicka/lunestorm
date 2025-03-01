import { artists, events } from "./store";
import Home from "@/components/Home";
import ContentView from "@/components/ContentView";
import EventList from "@/components/EventList";
import PlaceList from "@/components/PlaceList";
import ArtistList from "@/components/ArtistList";
import Contact from "@/components/Contact";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "ecumene",
    path: "/ecumene",
    redirect: '/ecumene/events',
    component: ContentView,
    children: [
      {
        name: "events",
        path: "events",
        component: EventList,
      },
      {
        name: "people",
        path: "people",
        component: ArtistList,
      },
      {
        name: "venues",
        path: "venues",
        component: PlaceList,
      },
      {
        name: "contact",
        path: "contact",
        component: Contact,
      }
    ]
  },
  {
    path: "/electro",
    name: "electro",
    redirect: '/electro/events',
    component: ContentView,
    props: { page: "electro" },
    children: [
      {
        name: "events",
        path: "events",
        component: EventList,
      },
      {
        name: "people",
        path: "people",
        component: ArtistList,
      },
      {
        name: "venues",
        path: "venues",
        component: PlaceList,
      },
      {
        name: "contact",
        path: "contact",
        component: Contact,
      }
    ]
  }
];

export default routes;
