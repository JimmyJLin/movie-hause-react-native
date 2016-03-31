var React = require('react-native')
var Badge = require('./Badge');
var Separator = require('./Helpers/Separator');

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
  getRowTitle(movie, item){
    return item[0] ? item[0].toUpperCase() + item.slice(1) + ':' : item;
  }

  render(){
    var movieInfo = this.props.movieInfo;
    var movieArr = ['Plot', 'Director', 'Actors', 'Rated']
    var list = movieArr.map((item, index) => {
      if(!movieInfo[item]){
        return <View key={index}/>
      } else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}>{this.getRowTitle(movieInfo, item)}</Text>
              <Text style={styles.rowContent}>{movieInfo[item]}</Text>
            </View>
            <Separator />
          </View>
        )
      }
    })

    return (
      <ScrollView style={styles.container}>
        <Badge movieInfo={this.props.movieInfo}/>
        {list}
      </ScrollView>
    )
  }
}

Movie.propTypes = {
  movieInfo: React.PropTypes.object.isRequired
}

module.exports = Movie;
