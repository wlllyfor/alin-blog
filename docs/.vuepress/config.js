module.exports = {
  base: '/',
  title: 'title',
  description: 'description',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [
      { text: '前端基础', link: '/basic/' },
    ],
    sidebar: {
      "/basic/": [
        {
          title: 'js',
          collapsable: false,
          children: [
            ['js/', 'Introduction'],
            'js/1',
            'js/2'
          ]
        },
      ]
    }
  }
}
