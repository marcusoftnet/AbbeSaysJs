var should = require("should");
var monk = require("monk");

var dbString = "localhost/AbbeSaysJs_Test";
var quotesCollectionName = "quotes";

describe("Adding quotes", function () {
	var quotes = {};

	beforeEach(function (done) {
		var db = monk(dbString);
		quotes = db(quotesCollectionName);
		done();
	});

	afterEach(function (done) {
		monk(dbString)
		.get(quotesCollectionName)
		.drop(function (err) {
			if(err) return done(err);
		});
		done();
	});

	it("requires a Kid");
	it("requires a quote");
	it("requires a SaidAt date");
});