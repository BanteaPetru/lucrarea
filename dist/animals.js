'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animals = function () {
    function Animals(options) {
        _classCallCheck(this, Animals);

        this.rasa = options.rasa;
        this.culoare = options.culoare;
        this.varsta = options.varsta;
        this.infom = options.infom;
        this.energ = options.energ;
        this.oboseala = options.oboseala;
    }

    _createClass(Animals, [{
        key: 'mananca',
        value: function mananca() {
            if (this.infom < 7) {
                console.log(this.rasa + ' ' + this.culoare + ' ' + 'cu varsta de' + ' ' + this.varsta + ' ' + 'Mananca');
            } else {
                console.log('Animalul nu este flamand');
            }
        }
    }, {
        key: 'semisca',
        value: function semisca() {
            if (this.energ > 6) {
                console.log(this.rasa + ' ' + this.culoare + ' ' + 'cu varsta de' + ' ' + this.varsta + ' ' + 'Se misca');
            } else {
                console.log(this.rasa + ' ' + 'trebuie sa doarma');
            }
        }
    }, {
        key: 'doarme',
        value: function doarme() {
            if (this.oboseala > 5) {
                console.log(this.rasa + ' ' + this.culoare + ' ' + 'cu varsta de' + ' ' + this.varsta + ' ' + 'Doarme');
            } else {
                console.log(this.rasa + ' ' + 'are destula energie pentru a se mai misca');
            }
        }
    }]);

    return Animals;
}();

var animal = new Animals({
    rasa: 'Tigrul',
    culoare: 'Alb',
    varsta: '10 ani',
    infom: 5,
    energ: 7,
    oboseala: 4
});
//animalul mananca
animal.mananca();
//animalul se misca
animal.semisca();
//animalul doarme
animal.doarme();