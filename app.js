var App = () => (
  <div>
    <h2>My Todo List</h2>
    {/* <TodoList /> */}
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

// let Cucumbers = () => (
//   <li>Cucumbers</li>
// );

// const Kale = () => (
//   <li>Kale</li>
// );

// var GroceryList = () => (
//   <ul>
//     <li>Eggs</li>
//     <li>Milk</li>
//     <Cucumbers />
//     <Kale />
//   </ul>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));



// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// );

// var GroceryList = () => (
//   <div>
//     <h2>Grocery List</h2>
//     <GroceryListItem groceryItems={['Cucumbers', 'Kale', 'Milk']}/>
//   </div>
// )

// ReactDOM.render(<GroceryList/>, document.getElementById("app"));


// --------------------------------- Creating class component


// class GroceryListItem extends React.Component {

//   constructor (props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li>{this.props.item}</li>
//     )
//   }

// };

// var GroceryList = (props) => (
//   <div>
//     <h2>Grocery List</h2>
//     <ul>
//     {props.groceryItems.map(item =>
//       <GroceryListItem item={item}/>
//     )}
//     </ul>
//   </div>
// )

// ReactDOM.render(<GroceryList groceryItems= {['Cucumbers', 'Kale', 'Milk']}/>, document.getElementById("app"));



// ---------------------------------  Add a State

class GroceryListItem extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover () {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      'fontWeight': this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.item}</li>
    )
  }
};

var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item}/>
    )}
    </ul>
  </div>
)

ReactDOM.render(<GroceryList groceryItems= {['Cucumbers', 'Kale', 'Milk']}/>, document.getElementById("app"));