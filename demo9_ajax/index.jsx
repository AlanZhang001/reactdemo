var $ = require("jquery");
var url = "https://api.github.com/repos/AlanZhang001/reactdemo/git/trees/master?recursive=1";

var Myajax = React.createClass({
    getInitialState: function() {
        return {
            "projectName":"reactdemo",
            "logList":[]
        };
    },
    render: function(){
        return  (<div>
                    <p>项目{this.state.projectName}的提交记录是</p>
                    <ol>
                        {
                            this.state.logList.map(function(item,index){
                                return (
                                    <li key={"item"+index}>
                                        <p>sha:{item.sha}</p>
                                        <p>size:{item.size}</p>
                                        <p>type:{item.type}</p>
                                        <p>url:{item.url}</p>
                                    </li>
                                )
                            })
                        }
                    </ol>
            </div>)
    },
    componentDidMount:function() {
        $.ajax({
            url:this.props.source,
            type:"get",
            cache:false,
            success: function(data){
                this.setState({
                    logList: data.tree
                });
            }.bind(this)
        });
    }
});

ReactDOM.render(
    <Myajax source={url} />,
    document.querySelector("#hello")
);
