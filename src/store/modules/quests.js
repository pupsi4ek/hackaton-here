import axiosInstance from "@/api";
import { Quest, Quests } from "@/api/routes"

// const filterObject = (obj, search) => {
//   let results = [];
//   for (let i = 0; i < obj.length; i++) {
//     for (let key in obj[i]) {
//       if (
//         obj[i][key]
//           .toString()
//           .toLowerCase()
//           .indexOf(search.toLowerCase()) != -1
//       ) {
//         results.push(obj[i]);
//         break;
//       }
//     }
//   }
//   return results;
// };

// function dynamicSort(property) {
//   var sortOrder = 1;
//   if (property[0] === "-") {
//     sortOrder = -1;
//     property = property.substr(1);
//   }
//   return function(a, b) {
//     var result =
//       a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
//     return result * sortOrder;
//   };
// }

export default {
  state: {
    quests: [],
    quest: [],
    // word: "",
    questsView: []
  },
  mutations: {
    setQuests(state, quests) {
      state.quests = quests;
    },
    setQuest(state, quest) {
      state.quest = quest;
    },
    createQuest(state, newQuest) {
      state.quest.push(newQuest);
    },
    editEvent() {},
    deleteEvent() {},
    // updateWord(state, input) {
    //   state.word = input;
    // },
    // updateSearchResults(state, results) {
    //   state.eventsView = results;
    // },
    // sortBy(state, sortKey) {
    //   if (state.eventsView.length > 0) {
    //     state.eventsView.sort(dynamicSort(sortKey));
    //   } else {
    //     state.events.sort(dynamicSort(sortKey));
    //   }
    // }
  },
  actions: {
    async fetchQuests({ commit }) {
      return axiosInstance
        .get(Quests())
        .then(res => res.data)
        .then(quests => {
          commit("setQuests", quests);
        })
        .catch(err => console.log(err));
    },
    async fetchQuest({ commit }, id) {
      return axiosInstance
        .get(Quest(id))
        .then(res => res.data)
        .then(quest => {
          commit("setQuest", quest);
        })
        .catch(err => console.log(err));
    },
    async postQuest({ commit }, quest) {
      return new Promise((resolve, reject) => {
        axiosInstance.post(Quests(), quest).then(
          res => {
            commit("createEvent", { ...quest });
            resolve(res.data.id);
          },
          err => {
            reject(err);
          }
        );
      });
    },
    async putEvent({ commit }, { id, quest }) {
      return new Promise((resolve, reject) => {
        axiosInstance.put(Quest(id), quest).then(
          res => {
            commit("editQuest");
            resolve(res.data.id);
          },
          err => {
            reject(err);
          }
        );
      });
    },
    async deleteEvent({ commit }, id) {
      return new Promise((resolve, reject) => {
        axiosInstance.delete(Quest(id)).then(
          res => {
            commit("deleteQuest");
            resolve(res.data.id);
          },
          err => {
            reject(err);
          }
        );
      });
    },
    // async updateSearchField({ state, commit, dispatch }, input) {
    //   await dispatch("updateEvents");
    //   commit("updateSearchResults", filterObject(state.events, input));
    //   commit("updateWord", input);
    // },
    async updateQuests({ state, dispatch }) {
      if (Object.keys(state.events).length == 0) {
        await dispatch("fetchQuests");
      }
    },
    // async clearSearch({ commit }) {
    //   commit("updateSearchResults", []);
    // },
    // async sortEvents({ commit }, { sortKey, sortDirection }) {
    //   if (sortDirection == "ASC") {
    //     commit("sortBy", sortKey);
    //   } else {
    //     commit("sortBy", "-" + sortKey);
    //   }
    // }
  },
  getters: {
    quests(state) {
      return state.quests;
    },
    quest(state) {
      return state.quest;
    },
    questCount(state) {
      return state.quests.length;
    },
    // word(state) {
    //   return state.word;
    // },
    questsView(state) {
      if (state.questsView.length > 0) {
        return state.questsView;
      } else {
        return state.quests;
      }
    }
    // validEvent(state) {
    //   return state.events.filter((p) => {
    //     return p.title && p.description;
    //   });
    // },
  }
};
