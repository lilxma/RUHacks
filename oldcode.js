import Header from './Header.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';
import TodoItem from './TodoItem.js';
import ContactCard from './ContactCard.js'
import Joke from './Joke.js';
import JokesData from './JokesData.js';
import vschoolProduct from './vschoolProduct.js';
import Product from './Product.js';
import todosData from './todosData.js';
function handleClick() {
    console.log("I was clicked")
}

function handleMouseOver(){
    console.log("The mouse appeared")   
}

class App extends React.Component {
    /*
  return (
     
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
  */
       constructor() {
          super()
          this.state = {
              todos: todosData,
              count: 0,
              character:{},
              loading: false
              
          }
           this.handlingClick = this.handlingClick.bind(this);
         //  this.handleChange = this.handleChange.bind(this)
         //  this.handleChange = this.handleChange.bind(this)
      }
    
    
   handlingClick(){
       this.setState(prevState => {
           return {count: prevState.count + 1}
       });
   }
    /*
    handleChange(id) {
        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
        this.setState(prevState => {
            return {this.state.todos.map(el => )}
        })
    }
    */
    /*
    componentDidMount(){
        this.setState({loading:true});
        fetch("https://pokeapi.co/api/v2/pokemon-form/1")
        .then(response => response.json())
        .then(data => {this.setState({character: data})});
    }
    */
    
    NavigateHandling(){
        browserHistory.push("/user");
        
    }
    
  render() {
   

/*
    const jokesComponents = JokesData.map(joke => {
        return <Joke key={joke.id}
                question={joke.question}
                    punchLine={joke.punchLine} />
                
    })
    */
    
  


    /* filter out the questions that only have an X number of characters */
   
          var jokesComp = JokesData.filter(joke => {
      return joke.question.length > 50
        
       

    })
        
         const jokesComponents = jokesComp.map(joke => {
        return <Joke key={joke.id}
                question={joke.question}
                    punchLine={joke.punchLine} />
                
    })
    
     const productComponents = vschoolProduct.map(el => {
        return <Product key={el.id}
        name={el.name}
        price={el.price}
        description={el.description}
        />
    })
        
          
       const todoComponents = this.state.todos.map(el => {
        return <TodoItem id={el.id}
        text={el.text}
        completed={el.completed}
           handleChange={this.handleChange}
        />
    })
      return   <div> 
                 <Header />
                 <div className="todo-list">
                 {todoComponents}
                 </div>
                 <MainContent />
                 <Footer />
                 <div className="contacts">
                 <ContactCard 
                    name="Mr.Whiskerson"
                    imgUrl="http://placekitten.com/300/200"
                    phone="(212) 555-1234"
                    email="mr.whiskaz@catnap.meow"/>
                 <ContactCard 
                   name="Fluffykins" 
                    imgUrl="http://placekitten.com/400/200" 
                    phone="(212) 555-2345" 
                    email="fluff@me.com"/>
                 <ContactCard 
                    name="Destroyer" 
                imgUrl="http://placekitten.com/400/300" 
                phone="(212) 555-3456" 
                email="ofworlds@yahoo.com"/>
                 <ContactCard 
                    name="Felix" 
                imgUrl="http://placekitten.com/200/100" 
                phone="(212) 555-4567" 
                email="thecat@hotmail.com"/>
                 </div>
                 <div style={{font: 25, color: "beige", backgroundColor: "black"}}>
                 <Joke 
                    question="What is Whitney Houston’s favorite type of coordination?"
                    punchLine="HAAANNNNND EYEEEEEEE."
                 />
                 <Joke 
                 question="Why are gay people always smiling?"
                    punchLine="Because they can’t keep a straight face."
                 />
                 <Joke 
                 question="Why does Waldo wear stripes?"
                    punchLine="Because he doesn’t want to be spotted."
                 />
                 <Joke 
                 
                    punchLine="To cover their butt quacks."
                 />
                 <Joke 
                 question="What’s green and has wheels?"
                    punchLine="Grass! I lied about the wheels."
                 />
                {jokesComponents} 
                 </div>
            
                 {productComponents}
                 
                <img onMouseOver={handleMouseOver} src="https://www.fillmurray.com/200/100"/>
                <br />
                <br />
                <button onClick={handleClick}>Click me</button>
                <div>
                  <header style={{fontSize: 100}}>{this.state.count}</header>
                  <button onClick={this.handlingClick}>Change!</button>                                 
                  </div>   
                                                   
                  <button onClick={this.NavigateHandling}>Redirect!</button>
                
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
            
                                                   
                                                   
                                                   
                                                   
                <button class="button">User</button>
                <button class="button">Volunteer</button>                                  
                                                   
                 </div>
                  
                
                  
                 }
                                                   }

                
                 /*
class App extends React.Component {
                 
                 yourMethodHere(){
          
      }
                 render() {
                  const style =  this.yourMethodHere()
        
                  return (
          <div>
              <h1>Code goes here</h1>
              </div>
              )
      }
                 }
                 /* getting a bunch of goodies from react.components that have previously been written for us */
                 
                 /* things like styling can go into the render method before you do the return    */ 
      /* {this.props}  */
                 
                 
                 
// #1
                 /*
function App() {
    return (
        <div>
            <Header />
            <Greeting />
        </div>
    )
}

class extends React.Component {
    render(){
      return   <div>
            <Header username="Annie" />
            <Greeting />
        </div>
    }
}
        
// #2
function Header(props) {
    return (
        <header>
            <p>Welcome, {props.username}!</p>
        </header>
    )
}

        class extends React.Component{
            render(){
             return    <header>
            <p>Welcome, {this.props.username}!</p>
        </header>
            }
        }
// #3
function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
}
        class extends React.Component {
            render() {
const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
                return 
                (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
            }
        }
        */
/*
                 class App extends React.Component {
                 constructor(){
          super()
          this.state = {
              answer: "Yes"
          }
}
                 render(){
          return (<div>
              <h1>Is state important to know? {this.state.answer}</h1>
                  <ChildComponent answer={this.state.answer} />
              </div>
          )
      }
                 }
                 */
// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

/*
class App extends React.Component {
    constructor(){
        super()
        this.state ={
        name: "Annie",
        age: "19"
    }
    }
   

    render() {
    return (
        <div>
            <h1>{this.state.name}</h1>
            <h3>{this.state.age} years old</h3>
        </div>
    )    
}
}
*/ 

/*
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render(){
        var state;
        if (this.state.isLoggedIn) {
            state = "in"
        } else {
            state = "out"
        }
        return (
        <div>
            <h1>You are currently logged {state}</h1>
        </div>
        
        )
    }
}
*/