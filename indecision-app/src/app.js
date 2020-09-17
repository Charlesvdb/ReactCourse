 import React from "react"
import ReactDOM from "react-dom"

class Header extends React.Component{
    render(){
        return (
            <div>
                <p>This is from Header!</p>
            </div>
        ) 
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        ) 
    }
}


const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
    </div>
)

ReactDOM.render(jsx,document.getElementById("app"))






