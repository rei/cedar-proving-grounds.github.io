import * as _ from 'lodash';
import DataManager from '../util/data-manager';

export const state = () => ({
  breadcrumbData: [],
});

export const mutations = {
  setBreadcrumbData (state, data) {
    state.breadcrumbData = data;
  },

};

export const actions = {
  loadBreadcrumbData (context) {
    DataManager.getBreadcrumbData().catch((error) => {
      console.log('get Breadcrumb Data Failed.  Error = ', error);
    }).then((data) => {
      console.log('breadcrumbItemData Request, state = ', state);
      context.commit('setBreadcrumbData', data);
      console.log('Get Breadcrumb Data Success.  Context = ', context, ' data = ', data);
    });
  }
};

