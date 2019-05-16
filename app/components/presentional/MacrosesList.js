class MacrosesList extends React.Component {
    render() {
        const {children, user, onDeleteMacrosClick} = this.props;

        return <React.Fragment> 
            <hr/>
            <p>У вас {children.length} макросов</p>

            {!children.length ? '' : <React.Fragment>
                <List keyPrefix={'Macroses'}>
                    {children.map((macros, i) => <Macros 
                        onDeleteMacrosClick={onDeleteMacrosClick}
                        config={macros}
                        key={`MacrosTemplate${macros.id}`}
                    />)}
                </List>
            </React.Fragment>}
        </React.Fragment>
    }
}
