const ActivityListItem = React.createClass({
  handleEdit(event){
    this.props.handleEdit(event.target.id);
  },
  handleDelete(event){
    AppActions.deleteActivityAt(event.target.id, this.props.activity.id);
  },
  render(){
    return (
      <tr>
        <td>{this.props.activity.name}</td>
        <td>{this.props.activity.description}</td>
        <td>{this.props.activity.location}</td>
        <td>
          <button id={this.props.index} className="btn btn-info" onClick={this.handleEdit}>Edit</button>
          <button id={this.props.index} className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
        </td>
      </tr>
    ); 
  }
});
