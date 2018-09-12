const quickLinks = [
  {
    id: 5,
    label: 'iExtract',
    icon: 'server',
  },
  {
    id: 6,
    label: 'iModel',
    icon: 'settings',
  },
  {
    id: 7,
    label: 'iApply',
    icon: 'bar-chart-alt',
  },
  {
    id: 8,
    label: 'iPlan',
    icon: 'panel',
  },
];

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
    selected: {
      id: 1,
      label: 'Home',
      icon: 'home',
    },
    content: [
      {
        label: 'Enterprise Analytics Intelligence',
        content: [
          {
            id: 1,
            label: 'Home',
            icon: 'home',
          },
          {
            id: 2,
            label: 'SyncReal',
            icon: 'shine',
          },
          {
            id: 3,
            label: 'Videos',
            icon: 'video-clapper',
            expand: false,
            content: [
              {
                id: 12,
                label: 'Video 1',
                parentId: 3,
              },
              {
                id: 13,
                label: 'Video 2',
                parentId: 3,
              },
            ],
          },
          {
            id: 4,
            label: 'Tutorials',
            icon: 'book',
            expand: false,
            content: [
              {
                id: 15,
                label: 'Tutorials 1',
                parentId: 4,
              },
              {
                id: 16,
                label: 'Tutorials 2',
                parentId: 4,
              },
            ],
          },
        ],
      },
      {
        label: 'Support',
        content: [
          {
            id: 9,
            label: 'FAQs',
            icon: 'support',
          },
          {
            id: 10,
            label: 'Help',
            icon: 'help',
          },
          {
            id: 11,
            label: 'Contact Us',
            icon: 'email',
          },
        ],
      },
    ],
  },

  iapply: {
    id: 'iapply',
    back: 'main',
    selected: {
      id: 10,
      label: 'Find',
      icon: 'search',
    },
    content: [
      {
        label: 'Home',
        content: getCompactedQuickLinks(7)
      },
      {
        label: 'Tools',
        content: [
          {
            id: 9,
            label: 'Help',
            icon: 'help',
          },
          {
            id: 10,
            label: 'Find',
            icon: 'search',
          },
          {
            id: 11,
            label: 'Sort',
            icon: 'exchange-vertical',
          },
          {
            id: 12,
            label: 'Filter',
            icon: 'filter',
          },
          {
            id: 13,
            label: 'Print',
            icon: 'printer',
          },
          {
            id: 14,
            label: 'Export',
            icon: 'export',
          },
          {
            id: 15,
            label: 'Save View',
            icon: 'layout-grid3',
          },
        ],
      },
      
    ],
  },
  getLink,
};
