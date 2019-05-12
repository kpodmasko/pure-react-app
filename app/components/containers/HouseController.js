class HouseController extends React.Component {
    state = {
        value: this.props.config.value,
        errorMessage: null
    }

    houseControllerRef = React.createRef();
    typesMap = {
        '1': HouseDevice,
        '2': HouseDevice,
        '3': HouseDevice,
        '4': HouseDevice,
        '5': HouseSensor,
        '6': HouseSensor
    }

    handleSubmit = e => {
        e.preventDefault();

        const self = this;
        const {user, config} = this.props; 
        const {value} = this.state;

        makeRequestAndGetPromise({
            type: 'PATCH',
            url: `${SERVER_BASE}/devices/${config.id}`,
            data: JSON.stringify({value}),
            token: user.token
        }).then((res) => {
            self.setState({
                ...self.state,
                value: res.value
            })
        }).catch((error) => {
            self.setState({
                ...self.state,
                errorMessage: error.message
            });
        });
    }

    handleChange = () => {
        this.setState({
            ...this.state,
            value: this.houseControllerRef.current.value
        });
    }

    render() {
        const {config} = this.props;
        const {errorMessage, value} = this.state;
        const self = this;
        const CurrentController = this.typesMap[config.type_id];
        const currentControllerProps = {
            ...config, 
            value,
            onChange: this.handleChange.bind(this)
        };

        return errorMessage ? 
            <ErrorViewer message={errorMessage}/> : 
            <form onSubmit={this.handleSubmit.bind(this)}>
                <CurrentController {...currentControllerProps} innerRef={self.houseControllerRef} />
                <input type='submit' value='Отправить изменение'/>            
            </form>
    }
}