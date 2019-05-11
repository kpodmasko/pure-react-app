class Home extends React.Component {
    state = {
        rooms: [],
        errorMessage: null
    }
    
    componentDidMount() {
        const self = this;
        const {user} = this.props;

        if (!user) {
            return;
        }
        
        makeRequestAndGetPromise({
            type: 'get',
            url: `${SERVER_BASE}/rooms`,
            token: user.token
        }).then((res) => {
            const parsedResponse = JSON.parse(res);

            if (parsedResponse.rooms) {
                self.setState({
                    ...self.state,
                    rooms: parsedResponse.rooms
                })
            }
        }).catch((error) => {
            self.setState({
                ...self.state,
                errorMessage: error.message
            });
        });
    }

    render() {
        const {errorMessage, rooms} = this.state;
        const {switchPage, user} = this.props;

        return <Page {...this.props} errorMessage={errorMessage}> 
            <RoomsList switchPage={switchPage}>
                {rooms}
            </RoomsList>
        </Page>
    }
}