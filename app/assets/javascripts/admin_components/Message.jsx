//MSG_TYPE is located at shared/constants.js
const Message = React.createClass({
  render(){
    var DOM;
    if (this.props.message !== "" && this.props.messageType === MSG_TYPE.SUCCESS) {
      DOM = <div className="alert alert-info" role="alert">{this.props.message}</div>;
    }else if (this.props.message !== "" && this.props.messageType === MSG_TYPE.ERROR){
      DOM = <div className="alert alert-danger" role="alert">{this.props.message}</div>;
    }else{
      DOM = <div></div>; 
    }

    return DOM;
  }
});
