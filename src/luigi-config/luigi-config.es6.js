Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
          {
            pathSegment: 'sample1',
            label: 'First',
            icon: 'nutrition-activity',
            viewUrl: '/sampleapp.html#/sample1'
          },
          {
            pathSegment: 'sample2',
            label: 'Second',
            icon: 'paper-plane',
            viewUrl: '/sampleapp.html#/sample2'
          },
          {
            category: { label: 'Links', icon: 'cloud' },
            label: 'Luigi Project',
            externalLink: {
              url: 'https://luigi-project.io/'
            }
          },
          {
            category: 'Links',
            label: 'Luigi Docs',
            externalLink: {
              url: 'https://docs.luigi-project.io/'
            }
          },
          {
            category: 'Links',
            label: 'SkillDisplay',
            externalLink: {
              url: 'https://skilldisplay.eu/'
            }
          }
        ]
      }
    ]
  },
  settings: {
    header: {
      title: 'Juice Shop',
      logo: '/logo.png'
    },
    responsiveNavigation: 'simpleMobileOnly',
    sideNavFooterText:'KRI v0.0.0',
  }
});
