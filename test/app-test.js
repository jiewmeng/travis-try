require('chai').should();

var app = require('../src/app');

describe('Test app', function() {
	it('should be able to add numbers', function() {
		var ans = app.add(1, 2);
		ans.should.be.equal(3);
	});
});
