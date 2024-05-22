{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div> 
</div>  */}

const parent = React.createElement("div" ,
{id: "parent"}, 
  [  React.createElement("div" , { id: "childa"}, 
       [ React.createElement("h1", {}, "Iam a H! tag"),
        React.createElement("h1", {}, "Iam a H! tag")
]),
    React.createElement("div" , { id: "childb"}, 
       [ React.createElement("h1", {}, "Iam a H! tag"),
        React.createElement("h1", {}, "Iam a H! tag")
]) 
]
)
// parent is just an object, 
// object is a react element

 const root = ReactDOM.createRoot(document.getElementById("root"));


 root.render(parent)