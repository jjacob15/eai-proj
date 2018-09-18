const vid1 = { id: 16, label: 'Video 1', link: '/video1', parentId: 3 };
const vid2 = { id: 17, label: 'Video 2', link: '/video2', parentId: 3 };
const tutorial1 = { id: 18, label: 'Tutorials 1', link: '/tutorials1', parentId: 4 };
const tutorial2 = { id: 19, label: 'Tutorials 2', link: '/tutorials2', parentId: 4 };

const home = { id: 1, label: 'Home', icon: 'home', link: '/' };
const syncReal = { id: 2, label: 'SyncReal', icon: 'shine', link: '/syncreal' };
const videos = { id: 3, label: 'Videos', icon: 'video-clapper', link: '/videos', content: [vid1, vid2] };
const tutorials = { id: 4, label: 'Tutorials', icon: 'server', link: '/tutorials', content: [tutorial1, tutorial2] };
const iextract = { id: 5, label: 'iExtract', icon: 'server', link: '/iextract' };
const imodel = { id: 6, label: 'iModel', icon: 'settings', link: '/imodel' };
const iapply = { id: 7, label: 'iApply', icon: 'bar-chart-alt', link: '/iapply' };
const iplan = { id: 8, label: 'iPlan', icon: 'panel', link: '/iplan' };
const faq = { id: 9, label: 'FAQs', icon: 'support', link: '/faqs' };
const help = { id: 10, label: 'Help', icon: 'help', link: '/help' };
const find = { id: 11, label: 'Find', icon: 'search', link: '/iapply/find' };
const sort = { id: 12, label: 'Sort', icon: 'exchange-vertical', link: '/iapply/sort' };
const print = { id: 13, label: 'Print', icon: 'printer', link: '/iapply/print' };
const exportLink = { id: 14, label: 'Export', icon: 'export', link: '/iapply/exportlink' };
const saveView = { id: 15, label: 'Save View', icon: 'layout-grid3', link: '/iapply/save' };

const quickLinks = [iextract, imodel, iapply, iplan];

const getLink = function(id) {
  return quickLinks.find(x => x.id === id);
};
const getCompactedQuickLinks = function(ignore) {
  if (!ignore) return quickLinks.slice();

  return quickLinks.filter(x => x.id !== ignore);
};

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
        content: [faq, help],
      },
    ],
  },

  iapply: {
    id: 'iapply',
    back: home,
    selected: find,
    content: [
      {
        label: 'Home',
        content: getCompactedQuickLinks(7),
      },
      {
        label: 'Tools',
        content: [find, sort, print, exportLink, saveView],
      },
    ],
  },

  getLink: getLink,
};
