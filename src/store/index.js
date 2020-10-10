import Vue from "vue";
import Vuex from "vuex";
import quests from "./modules/quests";
import users from './modules/users'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    quests,
    users
  }
});
