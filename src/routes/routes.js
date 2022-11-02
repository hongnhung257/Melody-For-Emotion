import Login from "./../components/login/Login";
import DefaultLayout from "../layout/defaultLayout/DefaultLayout";
import Service from "../layout/service/service";
import Home from "../layout/Home/Home";
import Timer from "../layout/timer/Timer";
const routePulic = [
  {
    path: "/",
    component: DefaultLayout,
  },
  {
    path: "/home",
    component: Home,
    layout: null,
  },
  {
    path: "/timer",
    component: Timer,
    layout: null,
  },
  {
    path: "/service",
    component: Service,
    layout: null,
  },
  {
    path: "/login",
    component: Login,
    layout: "onlyLayout",
  },
];
export default routePulic;
