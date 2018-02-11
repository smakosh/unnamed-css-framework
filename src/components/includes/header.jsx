import React from 'react'
import Github from './Github'
import Links from './links'
import Brand from './brand'

const unnamed = 'https://twitter.com/unnamedcss?ref_src=twsrc%5Etfw'
const paypal = 'https://www.paypal.me/ismailghallou'

const Header = () => (
    <div className="container header">
        <div className="brand">
            <Brand />
            <Github />
            <div className="buttons">
                <a  
                    href={paypal}
                    className="btn btn-outlined btn-rounded purple-btn paypal"
                >
                    <i className="fa fa-paypal"></i>
                    Donate
                </a>
                <a 
                    href={unnamed} 
                    className="twitter-follow-button" 
                    data-show-count="true"
                >
                    Follow @unnamedcss
                </a>
            </div>
            <Links />
        </div>
    </div>
)

export default Header