var LinkButton = React.createClass({
    render: function() {
        return (
            <div>
                <input type="text" ref="name"/><input type="button" value="click" onClick={this.handleClick} />
                <p>your name is {this.state.name}</p>
            </div>
        );
    },
    // 用于设置主键的默认状态
    getInitialState: function() {
        return {
            name:"alanzhang"
        };
    },
    // 改变state的值时会自动调用render方法
    handleClick: function() {
        this.setState({
            name: this.refs.name.value
        });
    }
});

ReactDOM.render(
    <LinkButton />,
    document.querySelector("#hello")
);