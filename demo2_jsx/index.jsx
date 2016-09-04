/*
注意：遍历数组时，每个元素，需要有一个唯一的key
 */

var names = ["world","React","Alanzhang"];
ReactDOM.render(
    <div>
        {
            names.map(function(item,index){
                return <div key={"Item-"+index}>Hello,{item}</div>;
            })
        }
    </div>,
    document.querySelector("#hello")
);

var words = [
    <a key="index1">hello</a>,
    <a key="index2">&nbsp;</a>,
    <a key="index3">world！</a>
];

ReactDOM.render(
    <p>{words}</p>,
    document.querySelector("#world")
);
