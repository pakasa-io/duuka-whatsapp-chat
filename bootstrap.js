const {name, version} = require('package.json')

module.exports = () => {
    console.log(`loaded extension: ${name}:${version}`)
};
