import Home from "@pages/home";
import Services from "@pages/services";
import ContactUs from "@pages/contact";
import Login from "@pages/login";

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
  {
    id: 4,
    path: "/login",
    component: Login,
  },
];

export default routes;
