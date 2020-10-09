export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'ralph-edits-com-studio',
                  apiId: '9e3f2346-9538-4730-bdb4-4b5d1a3af886'
                },
                {
                  buildHookId: '5f80eaa9b8a91f27ee2a5af1',
                  title: 'Events Website',
                  name: 'ralph-edits-com',
                  apiId: '6ed0ba88-af1c-4b9b-a74c-cab026b13e33'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alotoftype/ralph-edits-com',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ralph-edits-com.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
