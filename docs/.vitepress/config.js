module.exports = {
  title: 'PIPI Design',
  description: 'Just playing around.',

  themeConfig: {
    repo: 'pipihosting/design',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    sidebar: {
      '/': getGuideSidebar(),
      '/components/': getGuideSidebar(),
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Components',
      children: [
        { text: 'Buttons', link: '/components/buttons' }
      ]
    }
  ]
}
