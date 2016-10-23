import React from "react";


export default class CreateLinkForm extends React.Component {

  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);

    this.state = {
      error: ""
    };
  }

  _handleSubmit(e) {
    e.preventDefault();

    Meteor.call("links.insert", this.refs.url.value, (error) => {
      if (error) {
        this.setState({
          error: "Enter a valid URL"
        });
      } else {
        this.setState({
          error: ""
        });

        this.refs.url.value = "";
      }
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <form onSubmit={this._handleSubmit}>
            <label className="control-label">Link to shorten</label>
            <input
                ref="url"
                className=""
                placeholder="http://www.example.com"
                type="text"
            />

            <button className="waves-effect waves-light btn" type="submit">Shorten</button>
          </form>
        </div>
      </div>
    );
  }
}