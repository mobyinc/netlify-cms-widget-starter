import Control from './Control'
import Preview from './Preview'

if (typeof window !== 'undefined') {
  window.ContentBlocksExampleControl = Control
  window.ContentBlocksExamplePreview = Preview
}

export { Control as ContentBlocksExampleControl, Preview as ContentBlocksExamplePreview }
