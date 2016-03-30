var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  ScrollView
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  },
});

class Movie extends React.Component{
  render(){
    return (
      <ScrollView style={styles.container}>
        <Text>Movie Details</Text>
      </ScrollView>
    )
}

Movie.propTypes = {
  movieInfo: React.PropTypes.object.isRequired
}

module.exports = Movie;
