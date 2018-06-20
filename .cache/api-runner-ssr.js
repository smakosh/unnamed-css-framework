var plugins = [{
      plugin: require('/Users/smakosh/Desktop/openSource/unnamed-css-framework/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/smakosh/Desktop/openSource/unnamed-css-framework/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr.js'),
      options: {"plugins":[],"siteUrl":"https://unnamed.smakosh.com"},
    },{
      plugin: require('/Users/smakosh/Desktop/openSource/unnamed-css-framework/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"UA-106122837-1"},
    },{
      plugin: require('/Users/smakosh/Desktop/openSource/unnamed-css-framework/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"Unnamed","short_name":"Unnamed","start_url":"/","background_color":"#09b4e0","theme_color":"#09b4e0","display":"minimal-ui","icons":[{"src":"/favicon/logo-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicon/logo-512x512.png","sizes":"512x512","type":"image/png"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
