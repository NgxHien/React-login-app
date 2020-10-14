
import React from 'react';
import { connect } from 'react-redux';
import { Route, RouteProps, Redirect, RouteComponentProps } from 'react-router-dom';


interface ReduxProps {
    isLogIn: boolean
}

interface Props extends ReduxProps, RouteProps {
    component: React.ComponentType<RouteComponentProps>
}

export const PrivateRoute = (props: Props) => {
    const { location } = props;
    const { isLogIn, component: Component, ...rest } = props
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!isLogIn) {
                    return (
                        <Redirect to={{ pathname: '/login', state: { from: location } }} />
                    );
                }
                return <Component {...props} />
            }}
        />
    )
}
const mapStateToProps = (state: any) => ({
    isLogIn: state.homeReducer.isLogIn
})

export default connect(mapStateToProps)(PrivateRoute)