const path = require('path')
const svgFilePaths = [
    './examples/assets/icons'
].map((v) => path.resolve(v))
const tagName = 'icon'

module.exports = {
    tagName,
    svgFilePath: svgFilePaths,
    svgoConfig: {},
    pathAlias: {
        '@icon': svgFilePaths[0]
    },
    transformAssetUrls: {
        [tagName]: ['data'],
    },
}
