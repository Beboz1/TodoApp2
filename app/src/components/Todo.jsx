import "./todo.css"
function Todo(){
    let title1 = localStorage.getItem(1)
    let title2 = localStorage.getItem(2)
    let title3 = localStorage.getItem(3)
    let title4 = localStorage.getItem(4)
    let title5 = localStorage.getItem(5)
    let title6 = localStorage.getItem(6)
    let title7 = localStorage.getItem(7)
    let title8 = localStorage.getItem(8)
    let title9 = localStorage.getItem(9)
    let title10 = localStorage.getItem(10)
    let title11 = localStorage.getItem(11)
    let title12 = localStorage.getItem(12)
    let desc1 = localStorage.getItem("1d")
    let desc2 = localStorage.getItem("2d")
    let desc3 = localStorage.getItem("3d")
    let desc4 = localStorage.getItem("4d")
    let desc5 = localStorage.getItem("5d")
    let desc6 = localStorage.getItem("6d")
    let desc7 = localStorage.getItem("7d")
    let desc8 = localStorage.getItem("8d")
    let desc9 = localStorage.getItem("9d")
    let desc10 = localStorage.getItem("10d")
    let desc11 = localStorage.getItem("11d")
    let desc12 = localStorage.getItem("12d")
    return(
        <div className="container">
            <div><h1 className="title">{title1}</h1><h4 className="description">{desc1}</h4></div>
            <div><h1 className="title">{title2}</h1><h4 className="description">{desc2}</h4></div>
            <div><h1 className="title">{title3}</h1><h4 className="description">{desc3}</h4></div>
            <div><h1 className="title">{title4}</h1><h4 className="description">{desc4}</h4></div>
            <div><h1 className="title">{title5}</h1><h4 className="description">{desc5}</h4></div>
            <div><h1 className="title">{title6}</h1><h4 className="description">{desc6}</h4></div>
            <div><h1 className="title">{title7}</h1><h4 className="description">{desc7}</h4></div>
            <div><h1 className="title">{title8}</h1><h4 className="description">{desc8}</h4></div>
            <div><h1 className="title">{title9}</h1><h4 className="description">{desc9}</h4></div>
            <div><h1 className="title">{title10}</h1><h4 className="description">{desc10}</h4></div>
            <div><h1 className="title">{title11}</h1><h4 className="description">{desc11}</h4></div>
            <div><h1 className="title">{title12}</h1><h4 className="description">{desc12}</h4></div>
        </div>
    )
}
export default Todo