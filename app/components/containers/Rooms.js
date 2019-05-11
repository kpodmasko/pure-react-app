class Rooms extends React.Component {
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
        const {switchPage} = this.props;

        return <Page {...this.props} errorMessage={errorMessage}> 
            <p>У вас {rooms.length} комнат</p>
            {!rooms.length ? '' : <React.Fragment>
                <p>Вы можете к ним перейти:</p>

                <List keyPrefix={'Rooms'}>
                    {rooms.map((room, i) => <Link 
                        onClick={() => {
                            switchPage({
                                url: `${CLIENT_BASE}#/room/${room.id}`,
                                hash: `#/room`
                            });
                        }}
                        href={`#/room/${room.id}`} 
                        key={`RoomLink${room.id}${i}`}>
                        {room.name}
                    </Link>)}
                </List>
            </React.Fragment>}
        </Page>
    }
}