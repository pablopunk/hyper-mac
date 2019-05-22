exports.decorateConfig = config => ({
  padding: '5px',
})

exports.decorateBrowserOptions = defaults => ({
  ...defaults,
  titleBarStyle: 'native',
  transparent: false
})

exports.getTabsProps = (parentProps, props) => {
  props.tabs.length < 2
    ? document.body.classList.add('closed-tabs')
    : document.body.classList.remove('closed-tabs')

  return {
    ...parentProps,
    ...props
  }
}
