const Flight = require('../models/flight')
const Ticket = require('../models/ticket')
module.exports = {
    index,
    new: newFlight,
    create,
    show,

};

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All Flights', flights});
    });
  }

  function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
      Ticket.find({flight: flight._id}, function(err, tickets){
        
        res.render('flights/show', { title: 'Flight details', flight,tickets});
      })
    })
      
      
   
  }

  function newFlight(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    res.render('flights/new');
    
  }

  function create(req, res) {
    var flight = new Flight(req.body);
    console.log(flight);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.redirect('/flights/new');
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
  });
  }
  