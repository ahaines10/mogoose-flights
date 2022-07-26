const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
       
        airport: {
            type:String,
            enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
           
        },
        arrival: {
            type:Date,
            default: function() {
                let today = new Date();
                return today.setFullYear(today.getFullYear() + 1);
            }   
        }
    });


const flightSchema = new Schema({
    airline: {
        type:String,
        enum: ["American", "Southwest", "United", "Delta"]
    },
    airport: {
        type:String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO', ],
        default: 'DEN'
    },
    flightNo: {
        type:Number,
        min: 10,
        max: 9999
    },
    departs: {
        type:Date
    },
    destinations: [destinationSchema],
})

module.exports = mongoose.model('Flight', flightSchema);
