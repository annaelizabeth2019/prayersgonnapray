import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextInput } from 'react-materialize'


class EditForm extends Component {
  state = {
    higherPower: this.props.higherPower,
    text: this.props.text,
    id: this.props.id
  }

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state.text, this.state.higherPower, this.props.id)
  }

  isFormInvalid() {
    return !(this.state.higherPower && this.state.text);
  }

  reloadPage () {
    window.location.reload()
  }

  render() {
    console.log(this.props.id)
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
        <div className="flex-column">
          <div>
            <TextInput className="white-text" label="Higher Power" value={this.state.higherPower} name="higherPower" onChange={this.handleChange}  /><br></br>
            <TextInput label="Prayer" className="white-text" value={this.state.text} name="text" onChange={this.handleChange} />
          </div>
          <div className="">
            <button onClick={() => this.reloadPage()} className="btn btn-large" disabled={this.isFormInvalid()} >Update</button>
          </div>
        </div>
        </form>
        <a href=""><i className="material-icons right-align red-text" onClick={() => this.props.handleDelete(this.props.id)} >delete</i></a>
      </div>
    );
  }
};

export default EditForm;

