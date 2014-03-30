define(
    [
        'application'
    ],
    function (app) {
        'use strict';

        describe('Give it some context', function () {
            describe('maybe a bit more context here', function () {
                it('should run here few assertions', function () {
                    expect('foo').to.not.equal('bar');
                });
            });
        });
    }
);
