var app = require('../app');

var supertest = require('supertest');
//看下面这句，这是关键一句，得到的request对象可以直接按照
// superagent 的API进行调用

var request = supertest(app);

var should = require('should');

describe('test/app.test.js', function() {
	it('should return 55 when n is 10', function(done) {

		request.get('/fib')
		// .query 方法用来传querystring，.send方法用来传body
		// 它们都可以传Object对象进去
			.query({ n: 10})
			.end(function(err, res) {
				// 由于http返回的是String，所以我要传入55
				res.text.should.equal('55');
				// done(err) 这种做法写起来很鸡肋，是因为偷懒不想测err的值
				// 如果勤快点，这里应该写成
				done(err);
			});
	});

	var testFib = function(n, statusCode, expect, done) {
		request.get('/fib')
			.query({n: n})
			.expect(statusCode)
			.end(function(err, res) {
				res.text.should.equal(expect);
				done(err);
			});
	};

	it('should return 0 when n === 0', function(done) {
		testFib(0, 200, '0', done);
	})

	it('should equal 1 when n === 1', function(done) {
		testFib(1, 200, '1', done);
	})

	it('should equal 55 when n === 10', function(done) {
		testFib(10, 200, '55', done);
	})

	it('should throw when n > 10', function(done) {
		testFib(11, 500, 'n should <=10', done);
	})

	it('should throw when n < 0', function(done) {
		testFib(-1, 500, 'n should >= 0', done);
	})

	it('should throw when n isnt Number', function(done) {
		testFib('good', 500, 'n should be a Number', done)
	})

	// 单独测试一下返回码 500
	it('should status 500 when error', function(done) {
		request.get('/fib')
			.query({n: 100})
			.expect(500)
			.end(function(err, res) {
				// res.status.should.equal(500);
				done(err);
			});
	});
});