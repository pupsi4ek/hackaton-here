import axiosInstance from "@/api";
import { User, Users } from "@/api/routes"

export default {
  state: {
    users: [],
    user: []
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    createUser(state, newUser) {
      state.users.push(newUser);
    },
    editUser() {},
    deleteUser() {},
  },
  actions: {
    async fetchUsers({ commit }) {
      return axiosInstance
        .get(Users())
        .then(res => res.data)
        .then(users => {
          commit("setUsers", users);
        })
        .catch(err => console.log(err));
    },
    async fetchUser({ commit }, id) {
      return axiosInstance
        .get(User(id))
        .then(res => res.data)
        .then(user => {
          commit("setUser", user);
        })
        .catch(err => console.log(err));
    },
    async postUser({ commit }, user) {
      return new Promise((resolve, reject) => {
        axiosInstance.post(Users(), user).then(
          res => {
            commit("createUser", { ...user });
            commit('setUser', user);
            resolve(res.data.id);
          },
          err => {
            reject(err);
          }
        );
      });
    },
    async resetUser({ commit, state }) {
      await commit('setUser', [])
      return 
    },
    // async putUser({ commit }, { id, user }) {
    //   return new Promise((resolve, reject) => {
    //     axiosInstance.put(User(id), user).then(
    //       res => {
    //         commit("editUser");
    //         resolve(res.data.id);
    //       },
    //       err => {
    //         reject(err);
    //       }
    //     );
    //   });
    // },
    // async deleteUser({ commit }, id) {
    //   return new Promise((resolve, reject) => {
    //     axiosInstance.delete(User(id)).then(
    //       res => {
    //         commit("deleteUser");
    //         resolve(res.data.id);
    //       },
    //       err => {
    //         reject(err);
    //       }
    //     );
    //   });
    // },
    // async updateUsers({ state, dispatch }) {
    //   if (Object.keys(state.users).length == 0) {
    //     await dispatch("fetchUsers");
    //   }
    // },
  },
  getters: {
    users(state) {
      return state.users;
    },
    user(state) {
      return state.user;
    },
    // userCount(state) {
    //   return state.users.length;
    // },
    // usersView(state) {
    //   if (state.usersView.length > 0) {
    //     return state.usersView;
    //   } else {
    //     return state.users;
    //   }
    // }
  }
};
