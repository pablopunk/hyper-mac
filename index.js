const fs = require('fs')
const { join } = require('path')

const styles = fs.readFileSync(join(__dirname, 'index.css'), 'utf-8')

module.exports.decorateConfig = (config) => ({
  ...config,
  padding: '5px',
  css: `${config.css} ${styles}`
})

module.exports.decorateBrowserOptions = defaults => ({
  ...defaults,
  titleBarStyle: 'native',
  transparent: false
})

module.exports.getTabsProps = (parentProps, props) => {
  props.tabs.length < 2
    ? document.body.classList.add('closed-tabs')
    : document.body.classList.remove('closed-tabs')

  return {
    ...parentProps,
    ...props
  }
}
