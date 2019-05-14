class RoomsList extends React.Component {
    render() {
        const {switchPage, children} = this.props;

        return <React.Fragment> 
            <hr/>
            <p>У вас {children.length} комнат</p>

            {!children.length ? '' : <React.Fragment>
                <p>Вы можете к ним перейти:</p>

                <List keyPrefix={'Rooms'}>
                    {children.map((room, i) => <Link 
                        onClick={() => {
                            switchPage({
                                url: `${CLIENT_BASE}#/room/${room.id}`,
                                hash: `#/room`
                            });
                        }}
                        href={`#/room/${room.id}`} 
                        key={`RoomLink${room.id}${i}`}>
                        {room.name}
                        <img src={`${SERVER_BASE}/images/${room.photo}`} width="100px"/>
                    </Link>)}
                </List>
            </React.Fragment>}
        </React.Fragment>
    }
}