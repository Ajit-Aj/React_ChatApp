import React, {Component} from "react";
export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
   // console.log(props)
    return (
      <div className="avatar">
        <div className="avatar-img">
          <img src={this.props.image} alt="#" />
        </div>
        <span className={`isOnline ${this.props.isOnline}`}></span>
      </div>
    );
  
  // return(
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
  //   id: 5,
  //   name: "Smith",
  //   active: false,
  //   isOnline: false,
  //   );

  }
}