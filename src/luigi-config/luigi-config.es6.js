Luigi.setConfig({
  communication: {
    customMessagesListeners: {
      'back.to.core': data => {
        console.log(data)

        Luigi.customMessages().sendToAll({
          id: 'to.the.client',
          data: 'beautiful data for the client'
        })
      }
    }
  },
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
          {
            pathSegment: 'products',
            label: 'Products',
            icon: 'product',
            // viewUrl: 'http://localhost:5173/'
            viewUrl: 'http://localhost:8081/'
          },
          {
            pathSegment: 'about',
            label: 'About Us',
            icon: 'hint',
            viewUrl: '/sampleapp.html#/about'
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
    sideNavFooterText: 'KRI v0.0.0',
    appLoadingIndicator: {
      hideAutomatically: true
    }
  }
})

console.log(Luigi)
