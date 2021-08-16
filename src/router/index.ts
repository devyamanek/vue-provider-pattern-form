import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Form from "../views/Form.vue";
import LoginForm from "../components/organisms/LoginForm.vue";
import SignupForm from "../components/organisms/SignupForm.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Form",
    redirect: "/login",
    component: Form,
    children: [
      {
        path: "login",
        component: LoginForm,
      },
      {
        path: "signup",
        component: SignupForm,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
