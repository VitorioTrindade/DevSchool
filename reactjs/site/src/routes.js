import { BrowserRouter, Switch, Route } from 'react-router-dom'

import DevSchool from './pages/devschool'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={DevSchool} />
            </Switch>
        </BrowserRouter>
    )
}