const config = require('../data/Config')

import React, {Component} from 'react'
import favicon from '../static/favicon/logo-48.png'
import unnamedCover from '../static/unnamed.jpeg'

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e);
  }
}

export default class HTML extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      )
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta name="HandheldFriendly" content="True" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta name="description" content={config.siteDescription} />
          <meta name="image" content={unnamedCover} />

          <meta property="og:url" content={config.siteURL} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={config.siteName}  />
          <meta property="og:description" content={config.siteDescription}  />
          <meta property="og:image" content={unnamedCover} />
          <meta
            property="fb:app_id"
            content=""
          />

          <meta name="twitter:card" content={config.siteDescription}  />
          <meta
            name="twitter:creator"
            content="https://twitter.com/unnamedcss"
          />
          <meta name="twitter:title" content={config.siteName}  />
          <meta name="twitter:description" content={config.siteDescription}  />
          <meta name="twitter:image" content={unnamedCover} />

          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}