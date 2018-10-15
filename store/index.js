export const state = () => ({
  components:[],
});

export const mutations = {
  addComponent (component) {
    // Unused default for now.  May become useful in future.
    state.components.push(component);
  }
};
