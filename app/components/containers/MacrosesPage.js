class MacrosesPage extends React.Component {
    state = {
        macroses: [],
        errorMessage: null
    };
    
    componentDidMount() {
       this.toRequestMacroses(); 
    }

    toRequestMacroses() {
        const {user} = this.props;
        const self = this;

        if (!user) {
            return;
        }

        makeRequestAndGetPromise({
            type: 'get',
            url: `${SERVER_BASE}/macros`,
            token: user.token
        }).then((res) => {
            const parsedResponse = JSON.parse(res);

            if (parsedResponse.macroses) {
                self.setState({
                    ...self.state,
                    macroses: parsedResponse.macroses
                })
            }
        }).catch((error) => {
            self.setState({
                ...self.state,
                errorMessage: error.message
            });
        });
    }

    onDeleteMacrosClick = id =>  {
        const self = this;
        const {user} = this.props;

        makeRequestAndGetPromise({
            type: 'DELETE',
            url: `${SERVER_BASE}/macros/${id}`,
            token: user.token
        }).then((res) => {
            self.toRequestMacroses();
        }).catch((error) => {
            self.setState({
                ...self.state,
                errorMessage: error.message
            });
        });
    }

    render() {
        const {errorMessage, macroses} = this.state;

        return <Page {...this.props} errorMessage={errorMessage}>
            <MacrosesList onDeleteMacrosClick={this.onDeleteMacrosClick.bind(this)}>
                {macroses}
            </MacrosesList>
        </Page>
    }
}