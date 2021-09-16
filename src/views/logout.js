import React, {Component} from 'react';
class Logout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
    this.props.navigation.navigate('Home');
  }
  render() {
    return null;
  }
}

export default Logout;
