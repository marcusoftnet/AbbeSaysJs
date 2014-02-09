var should = require("should");
var qouteHandler = require("../handlers/quoteHandler");


describe("Adding quotes", function () {
	afterEach(function (done) {
		qouteHandler.removeAllQuotes();
		done();
	});

	it("requires a Kid", function (done) {
		var q = {
			Quote : "blah blah blah",
			SaidAt : new Date()
		};

		var result = qouteHandler.addQuote(q);
		result.sucess.should.equal(false);
		result.message.should.equal("Missing Kid data");

		done();
	});
	// it("requires a quote text", function (done) {
	// 	var q = {
	// 		Kid : {
	// 			Name : "Albert",
	// 			FamilyName : "Hammarberg",
	// 			BirthDate : new Date()
	// 		},
	// 		SaidAt : new Date()
	// 	};

	// 	var result = qouteHandler.addQuote(q);

	// 	result.sucess.should.equal(false);
	// 	result.message.should.equal("Quote text required");

	// 	done();
	// });
	// it("requires a SaidAt date");
	it("stores complete quote structure", function  (done) {
		var q = {
			Kid : {
				Name : "Albert",
				FamilyName : "Hammarberg",
				BirthDate : new Date()
			},
			Quote : "blah blah blah",
			SaidAt : new Date()
		};

		var result = qouteHandler.addQuote(q);
		result.sucess.should.equal(true);
		result.message.should.be.empty;

		done();
	});
});