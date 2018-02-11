import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/includes/header'
import Footer from '../components/includes/footer'
import App from '../components/App'
import NotFound from '../components/404'

const AppRoutes = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRoutes