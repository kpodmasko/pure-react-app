class ErrorViewer extends React.Component {
    render() {
        const {message, 
            styles = DEFAULT_STYLES_STUB_FOR_ERROR_PAGE, 
            classNames = DEFAULT_CLASSNAMES_STUB_FOR_ERROR_PAGE} = this.props;

        return <div className={['ErrorViewer__container', ...classNames.container]} style={styles.container}>
            <span className={['ErrorViewer__message', ...classNames.message]} style={styles.message}>
                {message}
            </span>
        </div>
    }
}