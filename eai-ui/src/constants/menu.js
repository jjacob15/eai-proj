import { iextractPath, reviewPath, iplanPath, imodelPath, reviewTestPath } from './links';

const vid1 = { id: 16, label: 'Video 1', link: '/video1', parentId: 3 };
const vid2 = { id: 17, label: 'Video 2', link: '/video2', parentId: 3 };
const tutorial1 = { id: 18, label: 'Tutorials 1', link: '/tutorials1', parentId: 4 };
const tutorial2 = { id: 19, label: 'Tutorials 2', link: '/tutorials2', parentId: 4 };

const home = { id: 1, label: 'Home', icon: 'home', link: '/' };
const syncReal = { id: 2, label: 'SyncReal', icon: 'shine', link: '/syncreal' };
const videos = { id: 3, label: 'Videos', icon: 'video-clapper', link: '/videos', content: [vid1, vid2] };
const tutorials = { id: 4, label: 'Tutorials', icon: 'book', link: '/tutorials', content: [tutorial1, tutorial2] };
const iextract = { id: 5, label: 'Fact', icon: 'server', link: iextractPath };
const imodel = { id: 6, label: 'Build', icon: 'settings', link: imodelPath };
const review = { id: 7, label: 'Review', icon: 'bar-chart-alt', link: reviewPath };
const iplan = { id: 8, label: 'Plan', icon: 'panel', link: iplanPath };
const faq = { id: 9, label: 'FAQs', icon: 'support', link: '/faqs' };
const help = { id: 10, label: 'Help', icon: 'help', link: '/help' };
const contact = { id: 20, label: 'Contact Us', icon: 'ticket', link: '/contact' };
const find = { id: 11, label: 'Find', icon: 'search', link: reviewPath + '/find' };
const sort = { id: 12, label: 'Sort', icon: 'exchange-vertical', link: reviewPath + '/sort' };
const print = { id: 13, label: 'Print', icon: 'printer', link: reviewPath + '/print' };
const exportLink = { id: 14, label: 'Export', icon: 'export', link: reviewPath + '/exportlink' };
const saveView = { id: 15, label: 'Save View', icon: 'layout-grid3', link: reviewPath + '/save' };

//Menu for Test to Know
const testsTTK = { id: 16, label: 'Tests', icon: 'layout-grid3', link: reviewTestPath };
const measuresTTK = { id: 17, label: 'Measures', icon: 'layout-grid3', link: reviewPath };
const clustersTTK = { id: 18, label: 'Clusters', icon: 'layout-grid3', link: reviewPath };
const attributesTTK = { id: 19, label: 'Attributes', icon: 'layout-grid3', link: reviewPath };
const datesTTK = { id: 20, label: 'Dates', icon: 'layout-grid3', link: reviewPath };
const sizeTTK = { id: 21, label: 'Size', icon: 'layout-grid3', link: reviewPath };
const helpTTK = { id: 22, label: 'Help', icon: 'layout-grid3', link: reviewPath };
const infoTTK = { id: 23, label: 'Info', icon: 'layout-grid3', link: reviewPath };
const dataTTK = { id: 24, label: 'Upload', icon: 'layout-grid3', link: reviewPath };

const quickLinks = [iextract, imodel, review, iplan];

const getLink = function(id) {
  return quickLinks.find(x => x.id === id);
};
// const getCompactedQuickLinks = function(ignore) {
//   if (!ignore) return quickLinks.slice();

//   return quickLinks.filter(x => x.id !== ignore);
// };

module.exports = {
  main: {
    id: 'main',
    content: [
      {
        label: 'Enterprise Analytics Intelligence',
        content: [home, syncReal, videos, tutorials],
      },
      {
        label: 'Support',
        content: [faq, help, contact],
      },
    ],
  },

  mainApp: {
    id: 'mainApp',
    back: home,
    selected: find,
    content: [
      {
        label: 'Home',
        content: quickLinks,
      },
      {
        label: 'Tools',
        content: [find, sort, print, exportLink, saveView],
      },
    ],
  },

  reivewTestApp: {
    id: 'reivewTestApp',
    back: review,
    selected: find,
    content: [
      {
        label: 'Review',
        content: [testsTTK, measuresTTK, clustersTTK, attributesTTK, datesTTK, sizeTTK, helpTTK, infoTTK],
      },
      {
        label: 'Data Edit',
        content: [dataTTK],
      },
      {
        label: 'Quick Links',
        content: quickLinks,
      },
    ],
  },

  getLink: getLink,
};
