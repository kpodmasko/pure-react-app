class Macros extends React.Component {
    render() {
        const {config, onDeleteMacrosClick} = this.props;

        return <div>
            <HouseControllersList readOnly={true}>
                {config.devices}
            </HouseControllersList>
            {onDeleteMacrosClick ? <span onClick={() => onDeleteMacrosClick(config.id)}>УДАЛИТЬ</span> : ''}     
        </div>
    }
}