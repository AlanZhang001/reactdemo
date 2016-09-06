var LifeCycle = React.createClass({
    getInitialState: function(){
        return {
            opacity: 1
        };
    },
    render: function(){
        // 因为 React 组件样式是一个对象，所以第一重大括号表示这是 JavaScript 语法，第二重大括号表示样式对象
        // 不能写成style="opacity:{this.state.opacity};"
        return (
            <div style={{opacity:this.state.opacity}}>
                Hello {this.props.name},你的名称一闪一闪
            </div>
        );
    },
    // Dom插入到文档之后
    componentDidMount: function(){
        this.timer = setInterval(function(){

            var opacity = this.state.opacity;

            opacity -=0.05;

            if(opacity < 0.1) {
                opacity = 1.0;
            }

            this.setState({
                opacity:opacity
            });

        }.bind(this),100);
    }
});

ReactDOM.render(
    <LifeCycle name="zhanglun"/>,
    document.querySelector("#hello")
);