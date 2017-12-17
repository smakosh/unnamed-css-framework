import React from 'react'

import Drone from '../../../assets/drone.JPG'
import Drone1 from '../../../assets/drone1.JPG'
import Drone2 from '../../../assets/drone2.jpg'

const Luca = 'https://luca-steeb.com/?ref=Unnamed'

const Cards = () => (
    <div className="container">
        <h3 className="title">Cards</h3>
        <div className="divider"></div>

        <div className="row">
            <div className="column column-first xlarge-4 small-12">
                <div className="card card-hoverable">
                <div className="card-header">
                    <h4>Card header</h4>
                </div>
                <div className="card-img">
                    <img src={Drone} alt="LA beach from the sky" />
                </div>
                <div className="card-footer">
                    <h4>Card footer</h4>
                </div>
                </div>
            </div>

            <div className="column xlarge-4 small-12">
                <div className="card card-nofooter card-hoverable">
                <div className="card-header">
                    <h4>Card header</h4>
                </div>
                <div className="card-img">
                    <img src={Drone1} alt="LA beach from the sky" />
                </div>
                </div>
            </div>

            <div className="column column-last xlarge-4 small-12">
                <div className="card card-noheader card-hoverable">
                <div className="card-img">
                    <img src={Drone2} alt="LA beach from the sky" />
                </div>
                <div className="card-footer">
                    <h4>Card footer</h4>
                </div>
                </div>
            </div>
        </div>

        <h4 className="description">Drone picture was taken by <a className="link" href={Luca}>Luca Steeb</a> !</h4>
        <h4 className="description">You can remove the hover effect by removing this class</h4>
        <pre className="little">.card-hoverable</pre>
    </div>
)

export default Cards