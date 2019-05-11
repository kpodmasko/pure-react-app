class NotFound extends React.Component {
    render() {
        return <Page cancelError={true} {...this.props}>     
            <ErrorViewer message={'404 Not Found'}/>
        </Page>
    }
}