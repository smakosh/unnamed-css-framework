import React from 'react'
import Intro from './layouts/intro/intro'
import Install from './layouts/install/install'
import Buttons from './layouts/buttons/buttons'
import Forms from './layouts/forms/forms'
import FormsCode from './layouts/forms/forms-code'
import RadioChecks from './layouts/forms/checkRadio'
import CheckradioCode from './layouts/forms/check-radio-code'
import Cards from './layouts/cards/cards'
import CardsCode from './layouts/cards/cards-code'
import ResponsiveImg from './layouts/media/responsive-media'
import ResponsiveImgCode from './layouts/media/responsive-media-code'
import Grid from './layouts/grid/grid'
import Useful from './layouts/useful'

const App = () => (
    <div className="container-full">
        <Intro />
        <Install />
        <Buttons />
        <Forms />
        <FormsCode />
        <RadioChecks />
        <CheckradioCode />
        <Cards />
        <CardsCode />
        <ResponsiveImg />
        <ResponsiveImgCode />
        <Grid />
        <Useful />
    </div>
)

export default App