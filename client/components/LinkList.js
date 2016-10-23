import React from "react";
import { createContainer } from "meteor/react-meteor-data";
import { Links } from "../../imports/collections/links";


class LinkList extends React.Component {

  constructor(props) {
    super(props);

    this._renderRows = this._renderRows.bind(this);
  }

  _renderRows() {
    return this.props.links.map(link => {
      const { url, clicks, token } = link;
      const shortLink = `http://localhost:3000/${token}`;

      return (
        <tr key={token}>
          <td>{url}</td>
          <td><a href={shortLink} target="_blank">{shortLink}</a></td>
          <td>{clicks}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <h2>Link Library</h2>
          <table className="table">
            <thead>
              <tr>
                <th>URL</th>
                <th>Address</th>
                <th>Clicks</th>
              </tr>
            </thead>
            <tbody>
              {this._renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe("links");

  return {
    links: Links.find({}).fetch()
  };
}, LinkList);