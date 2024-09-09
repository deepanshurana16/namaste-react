const parent = React.createElement(
    "div",
    {id:'parent'},
    React.createElement(
        "div",
        {id:'childdiv'},
        React.createElement(
            ["h1",
            {id:"headingtag"},
            "This is a heading tag from the nested loop!",
            React.createElement(
            "h1",
                {id:"headingtag"},
                "This is array inside the element tag!"
        )
            ]
    )
));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);