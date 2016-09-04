var NotesList  = React.createClass({
    render: function(){
        return (
            <lo>
                {
                    React.Children.map(this.props.children,function(item){
                        return <li>{item}</li>
                    })
                }
            </lo>
        );
    }
});

var names = ["zhanglun","张伦","Alanzhang"];
ReactDOM.render(
    <NotesList>
        <span key="span1">alanzhang</span>
        <span key="span2">zhanglun</span>
    </NotesList>,
    document.querySelector("#hello")
);