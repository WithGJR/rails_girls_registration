const ActivityList = React.createClass({
  getInitialState(){
    return {message: "", messageType: null}; 
  },
  render(){
    var rows = this.props.activities.map((activity, index) => {
      return(
        <ActivityListItem index={index} activity={activity} handleEdit={this.props.handleEdit} />
      ); 
    });

    return (
      <div>
        <Message message={this.state.message} messageType={this.state.messageType} />

        <button type="button" className="btn btn-success" onClick={this.props.gotoAddActivityPage}>新增活動</button>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>活動名稱</th>
              <th>描述</th>
              <th>舉行地點</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>  
      </div>
    ); 
  }
});
