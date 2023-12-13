import Home from "@pages/home";
import Services from "@pages/services";
import ContactUs from "@pages/contact";
import Login from "@pages/login";
import Register from "@pages/register";
import Forgot from "@pages/forgot";

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
  {
    id: 5,
    path: "/register",
    component: Register,
  },
  {
    id: 6,
    path: "/forgot",
    component: Forgot,
  },
];

export default routes;
