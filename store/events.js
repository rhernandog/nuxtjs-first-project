import EventService from "@/services/EventServices";

export const state = () => ({
  events: [],
  event: {},
});

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  }
};

export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents()
      .then(({ data }) => {
        commit("SET_EVENTS", data);
      })
      .catch();
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id)
      .then(({ data }) => {
        commit("SET_EVENT", data);
      })
      .catch();
  },
};
