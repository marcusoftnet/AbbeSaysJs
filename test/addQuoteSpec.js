var should = require("should");
var qouteHandler = require("../handlers/quoteHandler");


describe("Adding quotes", function () {
	var testQuote;

	beforeEach(function (done) {
		testQuote = {
			Kid : {
				Name : "Albert",
				FamilyName : "Hammarberg",
				BirthDate : new Date()
			},
			QuoteText : "blah blah blah",
			SaidAt : new Date()
		};

		done();
	});

	afterEach(function (done) {
		qouteHandler.removeAllQuotes();
		done();
	});

	it("requires a Kid", function (done) {
		delete testQuote.Kid;

		var result = qouteHandler.addQuote(testQuote);

		result.sucess.should.equal(false);
		result.message.should.equal("Missing Kid data");
		done();
	});
	it("requires a quote text", function (done) {
		delete testQuote.QuoteText;

		var result = qouteHandler.addQuote(testQuote);

		result.sucess.should.equal(false);
		result.message.should.equal("Quote text required");

		done();
	});

	it("requires a SaidAt date", function (done) {
		delete testQuote.SaidAt;

		var result = qouteHandler.addQuote(testQuote);
		result.sucess.should.equal(false);
		result.message.should.equal("SaidAt date required");
		done();
	});

	it("stores complete quote structure", function  (done) {
		var q = {
			Kid : {
				Name : "Albert",
				FamilyName : "Hammarberg",
				BirthDate : new Date()
			},
			QuoteText : "blah blah blah",
			SaidAt : new Date()
		};

		var result = qouteHandler.addQuote(q);
		result.sucess.should.equal(true);
		result.message.should.be.empty;

		done();
	});
});