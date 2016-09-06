var MyComponent = React.createClass({
    hanleClick: function(){
        alert(this.refs.username.value);
    },
    render: function() {
        return (
            <div>
                <input ref="username" type="text" />
                <input type="button" value="show the input" onClick={this.hanleClick}/>
            </div>
        );
    }
});

ReactDOM.render(
    <MyComponent />,
    document.querySelector("#hello")
);