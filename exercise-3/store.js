const initialState = {
  headerViewTimeline: new ViewTimeline({
    subject: document.querySelector(".hero"),
    axis: "block",
  }),
  teamViewTimeline: new ViewTimeline({
    subject: document.querySelector(".team"),
    axis: "block",
  }),

  serviceTimeline: new ViewTimeline({
    subject: document.querySelector(".services"),
    axis: "block",
  }),

  cardTimeline: new ViewTimeline({
    subject: document.querySelector(".services").querySelector(".cards"),
    axis: "block",
  }),
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

class Store {
  store;
  constructor(reducer, initialState) {
    this.store = Redux.createStore(reducer, initialState);
  }
}

export const store = new Store(reducer, initialState);
