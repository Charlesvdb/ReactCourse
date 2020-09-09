console.log("app.js is running")

//JSX - Javascript XML
const app = {
    title: "Indecision app",
    subtitle: "Put your life",
    options: ["One","Two"]
}

const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options" }</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
)


let count = 0

const addOne = () => {
    console.log("Addone")
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button id="my-id" className="button" onClick={() => addOne}> +1</button>
    </div>
)

const appRoot = document.getElementById("app")

ReactDOM.render(templateTwo,appRoot)
