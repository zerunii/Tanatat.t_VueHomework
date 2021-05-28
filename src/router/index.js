import Vue from "vue";
import Router from "vue-router";
import FoodList from "@/components/FoodList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/FoodList",
      name: "FoodList",
      component: FoodList
    },
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
