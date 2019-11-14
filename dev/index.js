import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { ContentBlocksExampleControl, ContentBlocksExamplePreview } from '../src'

const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [{
    name: 'test',
    label: 'Test',
    files: [{
      file: 'test.yml',
      name: 'test',
      label: 'Content',
      fields: [
        {
          label: 'Content', 
          name: 'content', 
          widget: 'list', 
          fields: [{ 
            label: 'Content', 
            name: 'test_widget',
            widget: 'test',
            blocks: ['string', 'image', 'markdown']
          }]
        },
      ],
    }],
  }],
}

CMS.registerWidget('test', ContentBlocksExampleControl, ContentBlocksExamplePreview)

init({ config })
