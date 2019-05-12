class HouseSensor extends React.Component {
    getLimits = typeId => {
        if (typeId === '5') {
            return [-100, 100];
        }

        if (typeId === '6') {
            return [10, 30];
        }

        return [];
    }

    render() {
        const {type_id, value, innerRef, onChange} = this.props;
        const [min, max] = this.getLimits(type_id);

        return <React.Fragment>
            <span>{min}</span>
            <input 
                title={value}
                type="range" 
                min={min}
                max={max}
                value={value} 
                ref={innerRef} 
                onChange={onChange}/>
            <span>{max}</span>
        </React.Fragment>
    }
}