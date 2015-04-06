var http = require('http');
var express = require('express');
var app = express();
app.set('port', 80);

//var pg = require('pg');
//var connectionString = process.env.DATABASE_URL || 'postgres://postgres:Printer238@localhost:5433/JPerL';


//client = new pg.Client(connectionString);
//client.connect();
//var flash = require('express-flash');

/*app.configure(function(){
    app.use(flash());
    app.use(express.cookieParser('keyboard cat'));
    app.use(express.session({ cookie: { maxAge: 60000 }, secret: 'topsecret'}));
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(express.compress());
    app.use(express.static(__dirname + '/JPerL4View/public'));    
});*/


app.get('/',function(req, res) {
  res.json({ status: 'success' })
});

/*

app.get('/api/song', function(req, res) {
  console.log("req: " + JSON.stringify(req.query));
  var title = req.query.title;
  var location = req.query.location;
  var format = req.query.format;
  var notes = req.query.notes;
  var artist = req.query.artist;
  var genre = req.query.genre;

  client.query('INSERT INTO songs(title, location, format, notes, artist, genre) VALUES($1, $2, $3, $4, $5, $6)', [title, location, format, notes, artist, genre]);
  
  query = client.query('SELECT * FROM songs');
  query.on('row', function(result) {
    console.log(result);

    if (!result) {
     // return res.send('No data found');
    } else {
     // res.send('Song: ' + result.title);
    }
  }); 
req.flash('info', 'song inserted');
//res.send("inserted song");
});

// textArea in songView
app.get('/api/songs', function(req, res) {
  var songString = "";
  query = client.query('SELECT title FROM songs');

  query.on('row', function(result) {
   console.log(JSON.stringify(result)); 
   console.log("hello");
    if (!result) {

     return res.send('No data found');
    } else {
     //  var songString = "";
      //for(var i = 0; i < result.length; i++){
       // songString 
      //}
     //res.send('Song: ' + result.title);
     songString += (result.title + "<br />");
    }
  }); 
req.flash('info', 'song inserted');
query.on( 'end', function() {
  res.send(songString);
    client.end();
});
//res.send("inserted song");
});*/
app.listen(app.get('port'), function() {
  console.log('Listening on:', 80);
});
