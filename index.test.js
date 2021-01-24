const tw = require('./index');

const assert = require('assert').strict;
const expect = require('expect.js');

describe('Color matches', function () {
    it('Matches to blueGray-500', function () {
        expected = 'blueGray-500';
        actual = tw.tailwindMatcher('#646e8b');
        assert.strictEqual(expected, actual);
    });

    it('Matches to coolGray-500', function () {
        expected = 'coolGray-500';
        actual = tw.tailwindMatcher('#6B7280');
        assert.strictEqual(expected, actual);
    });

    it('Matches to gray-500', function () {
        expected = 'gray-500';
        actual = tw.tailwindMatcher('#73717a');
        assert.strictEqual(expected, actual);
    });

    it('Matches to trueGray-500', function () {
        expected = 'trueGray-500';
        actual = tw.tailwindMatcher('#737373');
        assert.strictEqual(expected, actual);
    });

    it('Matches to warmGray-500', function () {
        expected = 'warmGray-500';
        actual = tw.tailwindMatcher('#78726c');
        assert.strictEqual(expected, actual);
    });

    it('Matches to red-500', function () {
        expected = 'red-500';
        actual = tw.tailwindMatcher('#ef4444');
        assert.strictEqual(expected, actual);
    });

    it('Matches to orange-500', function () {
        expected = 'orange-500';
        actual = tw.tailwindMatcher('#f96016');
        assert.strictEqual(expected, actual);
    });

    it('Matches to amber-500', function () {
        expected = 'amber-500';
        actual = tw.tailwindMatcher('#f58b0b');
        assert.strictEqual(expected, actual);
    });

    it('Matches to yellow-500', function () {
        expected = 'yellow-500';
        actual = tw.tailwindMatcher('#EAB308');
        assert.strictEqual(expected, actual);
    });

    it('Matches to lime-500', function () {
        expected = 'lime-500';
        actual = tw.tailwindMatcher('#93cc16');
        assert.strictEqual(expected, actual);
    });

    it('Matches to green-500', function () {
        expected = 'green-500';
        actual = tw.tailwindMatcher('#22c550');
        assert.strictEqual(expected, actual);
    });

    it('Matches to emerald-500', function () {
        expected = 'emerald-500';
        actual = tw.tailwindMatcher('#10b973');
        assert.strictEqual(expected, actual);
    });

    it('Matches to teal-500', function () {
        expected = 'teal-500';
        actual = tw.tailwindMatcher('#14b898');
        assert.strictEqual(expected, actual);
    });

    it('Matches to cyan-500', function () {
        expected = 'cyan-500';
        actual = tw.tailwindMatcher('#06c7d4');
        assert.strictEqual(expected, actual);
    });

    it('Matches to lightBlue-500', function () {
        expected = 'lightBlue-500';
        actual = tw.tailwindMatcher('#0eb7e9');
        assert.strictEqual(expected, actual);
    });

    it('Matches to blue-500', function () {
        expected = 'blue-500';
        actual = tw.tailwindMatcher('#3b92f6');
        assert.strictEqual(expected, actual);
    });

    it('Matches to indigo-500', function () {
        expected = 'indigo-500';
        actual = tw.tailwindMatcher('#6372f1');
        assert.strictEqual(expected, actual);
    });

    it('Matches to violet-500', function () {
        expected = 'violet-500';
        actual = tw.tailwindMatcher('#7e5cf6');
        assert.strictEqual(expected, actual);
    });

    it('Matches to purple-500', function () {
        expected = 'purple-500';
        actual = tw.tailwindMatcher('#9b55f7');
        assert.strictEqual(expected, actual);
    });

    it('Matches to fuchsia-500', function () {
        expected = 'fuchsia-500';
        actual = tw.tailwindMatcher('#cb46ef');
        assert.strictEqual(expected, actual);
    });

    it('Matches to pink-500', function () {
        expected = 'pink-500';
        actual = tw.tailwindMatcher('#ec48a7');
        assert.strictEqual(expected, actual);
    });

    it('Matches to rose-500', function () {
        expected = 'rose-500';
        actual = tw.tailwindMatcher('#f43f6d');
        assert.strictEqual(expected, actual);
    });
});

describe('Wrong formatting', function () {
    it('Hex is too long', function () {
        expect(() => tw.tailwindMatcher('#f43f6dd2s')).to.throwError();
    });
    it('Hex is too short', function () {
        expect(() => tw.tailwindMatcher('#f43f6s')).to.throwError();
    });
    it('Hex has no leading #', function () {
        expect(() => tw.tailwindMatcher('f43fd6d')).to.throwError();
    });
});
