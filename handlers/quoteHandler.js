var monk = require("monk");

var db = monk("localhost/AbbeSaysJs_Test");
var quotes = db.get("quotes");


exports.removeAllQuotes = function () {
	quotes.drop(function (err) {
			if(err) return { sucess : false, message : err};
		});
};

exports.addQuote = function (quote) {
	if(!quote.hasOwnProperty('Kid')){
		return { sucess : false, message: "Missing Kid data"};
	}
	if(!quote.hasOwnProperty('QuoteText')){
		return { sucess : false, message: "Quote text required"};
	}
	if(!quote.hasOwnProperty('SaidAt')){
		return { sucess : false, message: "SaidAt date required"};
	}

	// Enough of this validation - insert it!
	quotes.insert(quote, function (err, doc) {
			if(err) return done(err);
		});

	return { sucess : true, message : ""};
};