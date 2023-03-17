console.log("Message to developer");
function Alertmessage() {
    const Hi =()=>{alert("message from javascript alert!")}
    return <div><button onClick={Hi}>Click</button></div>
}
ReactDOM.render(<Alertmessage/>,document.getElementById('mydiv'))