var api = {
  getMovie(userinput){
    userinput = userinput.toLowerCase().trim();
    var url = `http://www.omdbapi.com/?t=${userinput}`;
    return fetch(url).then((res) => res.json());
  }



}

module.exports = api;
