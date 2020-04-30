'use strict';

const e = React.createElement;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      calculated: false
     };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    console.log("change " + event.target.name);
    const target = event.target;
    this.setState({[target.name]: target.value});  
  }

 handleSubmit(event) {
   console.log("Submit");
    let X = this.state.boxA * this.state.boxB;
    this.setState({ calculated: true, lifetime: X, costtomove: 0, roi: 0 });
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
      <form onsubmit={this.handleSubmit}>
        <div>
      <div>How much more money per year would you make moving up?  <input type="text" name="boxA" value={this.state.boxA} onChange={this.handleChange}/></div>
      <div>How many more years do you plan to teach? <input type="text" name="boxB" value={this.state.boxB} onChange={this.handleChange}/></div>
      <div>If you have a state pension, what percentage of your salary will you receive when you retire?  
        (For example, I will receive 75% of my salary, so I would enter '75')    
        <input type="text" name="boxC" value={this.state.boxC} onChange={this.handleChange}/>%</div>
        <div>*For this calculation, we used the national average longevity, 71 years, and PERA's 
          average age of retirement (58.8 years).</div>
        <div>How much will it cost to move up the pay scale?  <input type="text" name="boxE" value={this.state.boxE} onChange={this.handleChange}/></div>
     <div> <input type="submit" value="Calculate" /></div>
      </div>      
      </form>

        <div>
<div>How much more you will make over a lifetime?  <input type="readonly" name="lifetime" value={this.state.lifetime}/></div>
<div>Cost to move up the pay scale <input type="readonly" name="costtomove" value={this.state.costtomove}/></div>
<div>This is your return on investment:  <input type="readonly" name="roi" value={this.state.roi}/></div>
</div>
</div>
    );
  }
}

const domContainer = document.querySelector('#calculator_container');
ReactDOM.render(e(Calculator), domContainer);