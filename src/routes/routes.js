import Login from "./../components/login/Login";
import Register from "./../components/register/Register";
import ForgotPassword from "./../components/forgotPassword/ForgotPassword";
import ChangePassword from "./../components/changePassword/ChangePassword";
import DefaultLayout from "../layout/defaultLayout/DefaultLayout";
import Service from "../layout/service/service";
import Home from "../layout/Home/Home";
import Timer from "../layout/timer/Timer";
import Favorite from "./../layout/favorite/Favorite";
import Sound from "./../layout/sound/sound";
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
    path: "/favorite",
    component: Favorite,
    layout: null,
  },
  {
    path: "/sound",
    component: Sound,
    layout: null,
  },

  {
    path: "/login",
    component: Login,
    layout: "onlyLayout",
  },
  {
    path: "/register",
    component: Register,
    layout: "onlyLayout",
  },
  {
    path: "/forgotPassword",
    component: ForgotPassword,
    layout: "onlyLayout",
  },
  {
    path: "/changePassword",
    component: ChangePassword,
    layout: "onlyLayout",
  },
];
export default routePulic;
