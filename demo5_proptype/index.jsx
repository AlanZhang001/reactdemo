var Mytitle = React.createClass({
    PropTypes:{
        title:React.PropTypes.string.isRequired
    },
    getDefaultProps:function() {
        return {
            name:"zhanglun"
        }
    },
    render: function(){
        return <div>title:{this.props.title},name:{this.props.name}</div>;
    }
});

ReactDOM.render(
    <Mytitle title="string demo"/>,
    document.querySelector("#hello")
);