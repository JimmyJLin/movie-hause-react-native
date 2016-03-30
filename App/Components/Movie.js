var React = require('react-native')

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
  rowsContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
})

class Movie extends React.Component{
  render(){
    return (
      <ScrollView>
        <Text>Movie Details</Text>
      </ScrollView>
    )
  }
}

module.exports = Movie;
