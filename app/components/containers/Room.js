class Room extends React.Component {
    state = {
        room: null,
        errorMessage: this.props.user ? 'Комната отсутствует' : YOU_ARE_NOT_LOGGED_IN,
        roomId: window.location.hash.split('/').slice(2).join('')
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
    }

    render() {
        const {errorMessage, room} = this.state;

        return <Page {...this.props} errorMessage={errorMessage}> 
            {room && <React.Fragment>
                <h1>{room.name}</h1>
                <img src={`${SERVER_BASE}/images/${room.photo}`} width="50%"/>
            </React.Fragment>}
        </Page>
    }
}