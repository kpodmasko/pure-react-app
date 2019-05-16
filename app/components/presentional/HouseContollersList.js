class HouseControllersList extends React.Component {
    render() {
        const {children, user, readOnly} = this.props;

        return <React.Fragment> 
            <hr/>
            <p>У вас {children.length} устройств и датчиков</p>

            {!children.length ? '' : <React.Fragment>
                <List keyPrefix={'HouseControllers'}>
                    {children.map((controller, i) => <HouseController
                        readOnly={readOnly} 
                        key={`HouseControllerTemplate${controller.id}`} 
                        user={user} 
                        config={controller}/>)}
                </List>
            </React.Fragment>}
        </React.Fragment>
    }
}
