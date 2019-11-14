# netlify-cms-widget-\<name\>

[Check out a demo!](https://replace-with-widget-name.netlify.com/demo)

Overview of what your widget does.

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-contentblocksexample
```

```js
import contentblocksexample from 'netlify-cms-widget-contentblocksexample'

CMS.registerWidget('contentblocksexample', ContentBlocksExampleControl, ContentBlocksExamplePreview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-contentblocksexample@^1.0.0"></script>

<script>
  CMS.registerWidget('contentblocksexample', contentblocksexampleControl, contentblocksexamplePreview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: contentblocksexample }
```

## Configuration

Explain any custom configuration steps here, or omit the section if there are none.

## Support

For help with this widget, open an [issue](https://github.com/<user>/<repo>) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
