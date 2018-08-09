export default [
  {
    label: 'Enterprise Analytics Intelligence',
    content: [
      {
        id: 1,
        label: 'SyncReal',
        icon: 'home',
      },
      {
        id: 2,
        label: 'About EAI',
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
    label: 'Quick Links',
    content: [
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
];
