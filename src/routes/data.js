import Home from "@pages/home";
import Services from "@pages/services";
import ContactUs from "@pages/contact";

const routes = [
  {
    id: 1,
    path: "/",
    component: Home,
  },
  {
    id: 2,
    path: "/services",
    component: Services,
  },
  {
    id: 3,
    path: "/contact",
    component: ContactUs,
  },
];

export default routes;
