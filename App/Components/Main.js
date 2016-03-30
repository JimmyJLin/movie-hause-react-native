var React = require('react-native');
var api = require('../utils/api')
var Dashboard = require('./Dashboard')

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} = React;


var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
})

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userinput: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event){
    this.setState({
      userinput: event.nativeEvent.text
    })
  }

  handleSubmit(){
    console.log(this.state.userinput)
    this.setState({
      isLoading: true,
    });

    api.getMovie(this.state.userinput)
      .then((res)=>{
        console.log(res)
        if(res.Title === 'Not Found'){
          this.setState({
            error: 'Movie not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: res.Title || 'Select an Option',
            component: Dashboard,
            passProps: {movieInfo: res}
          });
          this.setState({
            isLoading: false,
            error: false,
            userinput: ''
          })
        }
      });
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Welcome to Movie Hause </Text>

        <TextInput
        style={styles.searchInput}
        value={this.state.userinput}
        onChange={this.handleChange.bind(this)} />

        <TouchableHighlight
        style={styles.button}
        onPress={this.handleSubmit.bind(this)}
        underlayColor="white">
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>

      </View>
    )
  }

}

module.exports = Main;
