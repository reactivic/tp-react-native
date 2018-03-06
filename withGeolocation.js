import React from 'react';

const withGeolocation = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        latitude: 37.78825,
        longitude: -122.4324,
      }
    }
    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => console.error(error.message),
      );
    }

    render() {
      return (
        <Component {...this.props} {...this.state}/>
      )
    }
  }
}

export default withGeolocation;
