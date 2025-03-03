import React, { Component } from "react";

class NhdEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhdSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    nhdHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.nhdSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            nhdSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    nhdHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.nhdSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.nhdSelectCheckBox.includes("Apple")}
              onChange={this.nhdHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.nhdSelectCheckBox.includes("Banana")}
              onChange={this.nhdHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.nhdSelectCheckBox.includes("Orange")}
              onChange={this.nhdHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.nhdHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NhdEventForm4;
