class List extends React.Component {
    render() {
        const {classNames = DEFAULT_CLASSNAMES_STUB_FOR_LIST_TEMPLATE, 
            styles = DEFAULT_STYLES_STUB_FOR_LIST_TEMPLATE,
            customTags = {},
            children,
            keyPrefix = ''} = this.props;
        const ListTag = customTags.list || 'ul';
        const ListItemTag = customTags.listItem || 'li';

        return <ListTag className={[...classNames.list]} style={{...styles.list}}>
            {children.map((listItem, i) => 
                <ListItemTag key={`${keyPrefix}${i}`} 
                    className={[...classNames.listItem]} 
                    style={{...styles.listItem}}>
                    {listItem}
                </ListItemTag>)}
        </ListTag>
    }
}