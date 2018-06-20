import React from 'react'
import { navigateTo } from 'gatsby-link'
import { Timeline, Follow } from 'react-twitter-widgets'
import './styles.scss'
import unnamedLogo from '../../../../static/logo/logo.svg'

const Intro = () => {
    const introData = [
        {
            id: 0,
            title: 'Easy to use',
            description: `Easy to memorize class names and feel free to copy/paste the code if you're too lazy to remember them.`
        },
        {
            id: 1,
            title: 'Works with SPA too',
            description: `import unnamed is all you need to be able to use the class names.`
        },
        {
            id: 2,
            title: 'Free and for ever',
            description: `You can support this project via opencollective.com/unnamed`
        }
    ]
    return (
        <div className="container center-text intro">
            <div className="branding">
                <img src={unnamedLogo} alt="unnamed logo" />
                <h2>Unnamed</h2>
                <p>A colorful css framework made by a human not an Ai</p>
            </div>
            <div className="row mb2">
                {
                    introData.map(intro => (
                        <div key={intro.id} className="column xlarge-4 small-12">
                            <h3>{intro.title}</h3>
                            <p>{intro.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className="github-buttons mb2">
                <iframe 
                    className="iframe" 
                    src="https://ghbtns.com/github-btn.html?user=smakosh&repo=unnamed-css-framework&type=star&count=true"
                    frameBorder="0" 
                    scrolling="0" 
                    width="90px" 
                    height="20px"
                    title="stars"
                >
                </iframe>
                <iframe 
                    className="iframe forkit" 
                    src="https://ghbtns.com/github-btn.html?user=smakosh&repo=unnamed-css-framework&type=fork&count=true"
                    frameBorder="0" 
                    scrolling="0" 
                    width="90px" 
                    height="20px"
                    title="forks"
                >
                </iframe>
            </div>
            <div className="mb2">
                <button className="btn btn-primary gradient-green" onClick={() => navigateTo('/docs/getting-started')}>
                    Documentation
                </button>
            </div>
            <Follow
                username="unnamedcss"
            />
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'unnamedcss'
                }}
                options={{
                    username: 'unnamedcss',
                    height: '800'
                }}
                onLoad={() => console.log('Timeline is loaded!')}
            />
        </div>
    )
}

export default Intro