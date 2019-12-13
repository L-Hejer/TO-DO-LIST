import React from "react";

class ToDoList extends React.Component {
  state = {
    term: "",
    items: [],
    change: "Complete",
    buttonComplete: false,
    buttonUndo: true
  };

  onChange = e => {
    this.setState({ term: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, {text:this.state.term, complete:false}]
    });
  };


  completeList=(key)=> {
    this.setState({
    items:this.state.items.map((el,i)=>
      i===key ? {...el,complete:!el.complete}:el
    )
    })
  }

  deleteList = e => {
    var id = e.target.id;
    this.state.items.splice(id, 1);
    this.setState({ items: this.state.items });
  };

  render() {
    return (
      <div className="Container">
        <div className="Input-Container">
          <div className="add-element">
            <h1>TO-DO APP!</h1>
            <h4>Add New To-Do</h4>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                id="myInput"
                placeholder="Enter New Task..."
                value={this.state.term}
                onChange={this.onChange}
              />
              <br />
              <button className="add-Btn">Add</button>
            </form>
          </div>
        </div>

        <div>
          <h2> Let's get some work done!</h2>
        </div>
        <ul id="myUL">
          {this.state.items.map((el, i) => (
            <li key={i}>
              <button onClick={()=>this.completeList(i)}> {!el.complete ? "Complete":"Undo"} 
              </button>
              <button id={i} onClick={this.deleteList.bind(this)}>
                Delete
              </button>
              <p style={{display:'inline', textDecoration: el.complete ? "line-through" : "none"}}>{el.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
