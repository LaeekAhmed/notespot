const rootStyles = window.getComputedStyle(document.documentElement)

if (rootStyles.getPropertyValue('--book-cover-width-large') != null && rootStyles.getPropertyValue('--book-cover-width-large') !== '') {
    // console.log(rootStyles.getPropertyValue('--book-cover-width-large'))
    ready()
} else {
  document.getElementById('main-css').addEventListener('load', ready)
}
function ready() {
    const coverWidth = parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'))
    const coverAspectRatio = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'))
    const coverHeight = coverWidth / coverAspectRatio
    FilePond.registerPlugin(
      FilePondPluginImagePreview,
      FilePondPluginImageResize,
      FilePondPluginFileEncode,
    )
  
    FilePond.setOptions({
      stylePanelAspectRatio: 1 / coverAspectRatio,
      imageResizeTargetWidth: coverWidth,
      imageResizeTargetHeight: coverHeight,
      allowPdfPreview: true,
      pdfPreviewHeight: 320,
      pdfComponentExtraParams: 'toolbar=0&view=fit&page=1'
    })
    
    FilePond.parse(document.body)
}