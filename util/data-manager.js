import xhr from './xhr';

const BREADCRUMB_SERVICE = 'https://cedar-data-7befb.firebaseio.com/testData/breadcrumbs.json';

export default {

  getBreadcrumbData: () => new Promise((resolve, reject) => {
    return xhr({
      url: BREADCRUMB_SERVICE,
      success: resolve,
      error: reject,
    });
  }),
};
