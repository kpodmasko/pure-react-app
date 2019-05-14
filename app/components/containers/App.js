class App extends React.Component { 
    state = {
        userToken: null    
    };

    authorizeUser = userToken => {
        this.setState({
            ...this.state,
            userToken
        })
    }

    render() {
        const {userToken} = this.state;
        const pageProps = {
            userToken
        }

        return <Router pageProps={pageProps}>
            <Home path='#/'/>
            <Login path='#/login' authorizeUser={this.authorizeUser.bind(this)}/>
            <Devices path='#/devices'/>
            <Macroses path='#/macroses'/>
            <Room path='#/room/'/>
            <RoomsList path='#/roomsList'/>
            <ErrorViewer message={NOT_FOUND_PAGE_404}/>
        </Router>
    }
}