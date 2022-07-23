
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
};
function newTicket(req, res) {
    
    res.render('tickets/new', {flightId: req.params.id});
    
  }
function create(req, res) {
req.body.flight = req.params.id;
var ticket = new Ticket(req.body);

ticket.save(function(err) {
  // one way to handle errors
  if (err) return res.redirect('/tickets/new');
  // for now, redirect right back to new.ejs
  res.redirect(`/flights/${req.params.id}`);
});
}