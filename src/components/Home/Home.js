import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Report from '../Report/ReportAnalysis';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'
import "./Home.css";
import "../css/main.css";
import * as loading from '../../assets/img/ui-sam.jpg';

const routes = [

    {
        path: '/Report',
        main: () => <Report />
    }
]

const VerticalSidebar = ({ animation, direction, visible, dimmed }) => (
    <Router>
        <Sidebar
            as={Menu}
            animation={animation}
            direction={direction}
            icon='labeled'
            inverted
            vertical
            visible={visible}
            style={{ width: 243 }}
            >
            <ul class="sidebar-menu" id="nav-accordion">
			 <p class="centered"><a href="profile.html"><img src={`${loading}`}  class="img-circle" width="80"/></a></p> 
          <h5 class="centered">Sam Soffes</h5>
          <Menu.Item as={NavLink} exact to="/Report" > <i class="fa fa-dashboard"></i>&nbsp;
              <span>Dashboard</span> </Menu.Item>
         </ul>
        </Sidebar>
        <Sidebar.Pusher dimmed={dimmed && visible} style={{ 'height': '100vh' }} as={Grid}>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                    />
            )) }
        </Sidebar.Pusher>

    </Router>

)

VerticalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
}

export default class Home extends Component {
    state = {
        animation: 'overlay',
        direction: 'left',
        dimmed: false,
        visible: false,
    }

    handleAnimationChange = (animation) => () =>
        this.setState((prevState) => ({ animation, visible: !prevState.visible }))

    handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

    handleDirectionChange = (direction) => () =>
        this.setState({ direction, visible: false })

    render() {
        const { animation, dimmed, direction, visible } = this.state
        const vertical = direction === 'bottom' || direction === 'top'

        return (
            <div>
               <i class="fa fa-bars"   disabled={vertical}
                    onClick={this.handleAnimationChange('uncover') }></i>
                   <span class="header1"> Report </span>
                

                <Sidebar.Pushable as={Segment}>
                    {vertical ? null : (
                        <VerticalSidebar
                            animation={animation}
                            direction={direction}
                            visible={visible}
                            />
                    ) }
                </Sidebar.Pushable>
            </div>
        )
    }
}
