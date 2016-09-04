var HelloMessage = React.createClass({
    render: function(){
        return <h1 className={this.props.className}>this is component:{this.props.name}</h1>
    }
});

var names = ["zhanglun","张伦","Alanzhang"];
ReactDOM.render(
    <div>{
        names.map(function(item,index){
            return <HelloMessage key={"item"+index} name={item} className="demo" htmlFor="demo"/>;
        })
    }</div>,
    document.querySelector("#hello")
);