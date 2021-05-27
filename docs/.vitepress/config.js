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
      text: 'Content',
      children: [
        { text: 'Color', link: '/content/color' },
        { text: 'Typography', link: '/components/typography' },
      ]
    },
    {
      text: 'Components',
      children: [
        { text: 'Badge', link: '/components/badge' },
        { text: 'Buttons', link: '/components/buttons' },
        { text: 'Breadcrumb', link: '/components/breadcrumb' },
        { text: 'Table', link: '/components/table' },
        { text: 'Form', link: '/components/form' },
        { text: 'List Group', link: '/components/list_group' },
        { text: 'Modal', link: '/components/modal' },
      ]
    }
  ]
}
