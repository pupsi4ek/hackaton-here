import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import SignUp from "@/views/SignUp"
import Cabinet from "@/views/Cabinet";
import QuestPage from '@/views/QuestPage'
import EditQuest from '@/views/EditQuest'
import CreateQuest from '@/views/CreateQuest'
import PlayQuest from '@/views/PlayQuest'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/quest/:id",
    name: "Quest",
    component: QuestPage
  },
  {
    path: "/quest/:id/edit",
    name: "EditQuest",
    component: EditQuest
  },
  {
    path: "/quest/:id/play",
    name: "PlayQuest",
    component: PlayQuest
  },
  {
    path: "/create",
    name: "CreateQuest",
    component: CreateQuest
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/cabinet",
    name: "Cabinet",
    component: Cabinet
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;