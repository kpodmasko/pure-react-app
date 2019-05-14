class RoomPage extends React.Component {
    state = {
        room: null,
        errorMessage: this.props.user ? 'Комната отсутствует' : YOU_ARE_NOT_LOGGED_IN,
        roomId: window.location.hash.split('/').slice(2).join(''),
        roomHouseControllers: null
    }
    
    componentDidMount() {
        const self = this;
        const {roomId} = this.state;
        const {user} = this.props;

        if (!user) {
            return;
        }

        makeRequestAndGetPromise({
            type: 'get',
            url: `${SERVER_BASE}/room/${roomId}`,
            token: user.token
        }).then((res) => {
            const parsedResponse = JSON.parse(res);

            if (parsedResponse.room) {
                self.setState({
                    ...self.state,
                    room: parsedResponse.room,
                    errorMessage: null
                })
            } 
        }).catch((error) => {
            self.setState({
                ...self.state,
                errorMessage: error.message
            });
        });

        makeRequestAndGetPromise({
            type: 'get',
            url: `${SERVER_BASE}/room/${roomId}/devices`,
            token: user.token
        }).then((res) => {
            const parsedResponse = JSON.parse(res);

            if (parsedResponse.devices) {
                self.setState({
                    ...self.state,
                    roomHouseControllers: parsedResponse.devices,
                    errorMessage: null
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
        const {errorMessage, room, roomHouseControllers} = this.state;
        const {user} = this.props;

        return <Page {...this.props} errorMessage={errorMessage}> 
            {room && <React.Fragment>
                <h1>{room.name}</h1>
                {roomHouseControllers && <HouseControllersList user={user}>
                    {roomHouseControllers}
                </HouseControllersList>}
            </React.Fragment>}
        </Page>
    }
}