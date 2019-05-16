class HouseDevice extends React.Component {
    state = this.getInitState()
    checkboxRef = React.createRef();

    getInitState() {
        const {type_id, value} = this.props;
        const [on, off] = this.getStatesToToggle(type_id);

        return {
            checked: value === on
        }
    }

    getStatesToToggle(typeId) {
        if (["1", "4"].includes(typeId)) {
            return ["open", "close"];
        }

        if (["2", "3"].includes(typeId)) {
            return ["on", "off"];
        }

        return [];
    }

    toggleCheckbox() {
        const {checked} = this.state;
        const {onChange, readOnly} = this.props;

        if (readOnly) {
            return;
        }
        
        this.setState({
            ...this.state,
            checked: !checked
        }, onChange);
    }

    render() {
        const {checked} = this.state;
        const {type_id, innerRef, name} = this.props;
        const [on, off] = this.getStatesToToggle(type_id);

        return <React.Fragment>
            <span>Устройство {name} : </span>
            <input type="checkbox" ref={this.checkboxRef} checked={checked} onChange={this.toggleCheckbox.bind(this)}/>
            <input style={{display: 'none'}} value={checked ? on : off} ref={innerRef} onChange={() => {}}/>
        </React.Fragment>
    }
}