class NotFoundPage extends React.Component {
    render() {
        return <Page errorMessage={NOT_FOUND_PAGE_404} {...this.props}/>
    }
}