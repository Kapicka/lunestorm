import { artists, events } from "./store";
import Home from "@/components/Home";
import ContentView from "@/components/ContentView";
import EventList from "@/components/EventList";
import PlaceList from "@/components/PlaceList";
import ArtistList from "@/components/ArtistList";
import Contact from "@/components/Contact";

const filterList = (list, type) => list.filter(li => li.type.includes(type));

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
        props: { events: filterList(events, "ecumene") }
      },
      {
        name: "people",
        path: "people",
        component: ArtistList,
        props: { artists: filterList(artists, "ecumene") }
      },
      {
        name: "venues",
        path: "venues",
        component: PlaceList,
        props: { places: filterList(events, "ecumene") }
      },
      {
        name: "contact",
        path: "contact",
        component: Contact,
        props: { places: filterList(events, "ecumene") }
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
        props: { events: filterList(events, "electro") }
      },
      {
        name: "people",
        path: "people",
        component: ArtistList,
        props: { artists: filterList(artists, "electro") }
      },
      {
        name: "venues",
        path: "venues",
        component: PlaceList,
        props: { places: filterList(events, "electro") }
      },
      {
        name: "contact",
        path: "contact",
        component: Contact,
        props: { places: filterList(events, "electro") }
      }
    ]
  }
];

export default routes;
