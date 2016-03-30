var React = require('react-native');
var api = require('../utils/api');
var Movie = require('./Movie')
var Saved = require('./Saved')
var Edit = require('./Edit')

var {
  Text,
  View,
  NavigatorIOS,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component{
  makeBackground(btn){
  var obj = {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1
  }
  if(btn === 0){
    obj.backgroundColor = '#48BBEC';
  } else if (btn === 1){
    obj.backgroundColor = '#E77AAE';
  } else {
    obj.backgroundColor = '#758BF4';
  }
  return obj;
  }

  goToMovie(){

  }

  goToSaved(){

  }

  goToEdit(){
    
  }

  render(){
    return (
      <View style={styles.container}>
      <Image source={{uri: this.props.movieInfo.Poster}} style={styles.image}/>

      <TouchableHighlight
        style={this.makeBackground(0)}
        onPress={this.goToMovie.bind(this)}
        underlayColor="#88D4F5">
          <Text style={styles.buttonText}> Movie Details </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={this.makeBackground(1)}
        onPress={this.goToSaved.bind(this)}
        underlayColor="#E39EBF">
          <Text style={styles.buttonText}>View Saved Movies</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={this.makeBackground(2)}
        onPress={this.goToEdit.bind(this)}
        underlayColor="#9BAAF3">
          <Text style={styles.buttonText}>Edit Saved Movies</Text>
      </TouchableHighlight>

      </View>
    )
  }
}

module.exports = Dashboard;
