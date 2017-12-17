import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/includes/header'
import Footer from '../components/includes/footer'
import App from '../components/App'
import Soon from '../components/soon'
import NotFound from '../components/404'

const AppRoutes = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/soon" component={Soon} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRoutes