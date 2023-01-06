import React, {Component} from "react"

class MainContent extends Component{
  constructor (props){
    super(props);
    this.state = {
      isLoaded:false,
      allWeights:[]
    };
  }
   componentDidMount (){
     fetch('http://192.168.1.27:49204/src/components/pages/contact.me.html')
     .then (res => res.json())
     .then (
      (result) => {
        this.setState({
          allWeights: result
        });
      }
     )
   }
   render(){
  return (
    <div>
      {this.state.allWeights.map(emp =>(
        <div>
          {emp.empName} weighed {emp.empWeight }
          on [date]
          </div>
      ))}
    </div>
  );
   }
}

export default MainContent