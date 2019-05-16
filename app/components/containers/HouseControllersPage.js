class HouseControllersPage extends React.Component {
    state = {
        rooms: [],
        houseControllers: [],
        errorMessage: null
    }

    toRequestAndSaveAllControllers() {
        const self = this;
        const {user} = this.props;
        const {rooms} = this.state;

        const houseControllersPromises = rooms.map((room, i) => makeRequestAndGetPromise({
            type: 'get',
            url: `${SERVER_BASE}/room/${room.id}/devices`,
            token: user.token
        }));

        Promise.all(houseControllersPromises).then(
            responses => {
                self.setState({
                    ...self.state,
                    houseControllers: responses.map(res => (JSON.parse(res).devices)).flat()
                })
            },
            error => {
                self.setState({
                    ...self.state,
                    errorMessage: error.message
                });
            }
        );
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
                }, self.toRequestAndSaveAllControllers)
            }
        }).catch((error) => {
            self.setState({
                ...self.state,
                errorMessage: error.message
            });
        });
    }

    render() {
        const {houseControllers, errorMessage} = this.state;

        return <Page {...this.props} errorMessage={errorMessage}>
            {houseControllers.length && <HouseControllersList>
                {houseControllers}
            </HouseControllersList>}
        </Page>
    }
}