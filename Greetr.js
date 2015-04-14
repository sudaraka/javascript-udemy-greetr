;(function(global, $) {
    'use strict';

    var supportedLangs = ['en', 'es'],

        greetings = {
            en: 'Hello',
            es: 'Hola'
        },

        formal_greetings = {
            en: 'Greetings',
            es: 'Saludos'
        },

        logMessaged = {
            en: 'Logged in',
            es: 'Inicio sesion'
        },

        Greetr = function(firstname, lastname, language) {
            return new Greetr.init(firstname, lastname, language);
        };

    Greetr.prototype = {

        full_name: function() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function() {
            if(-1 === supportedLangs.indexOf(this.language)) {
                throw 'Invalid language';
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formal_greeting: function() {
            return formal_greetings[this.language] + ' ' + this.full_name();
        },

        greet: function(formal) {
            var msg;

            if(formal) {
                msg = this.formal_greeting();
            }
            else {
                msg = this.greeting();
            }

            if(console) {
                console.log(msg);
            }

            return this;
        },

        log: function() {
            if(console) {
                console.log(logMessaged[this.language] + ': ' + this.full_name());
            }

            return this;
        },

        set_lang: function(language) {
            this.language = language;

            this.validate();

            return this;
        },

        html_greet: function(selector, formal) {
            var msg;

            if(!$) {
                throw 'jQuery not loaded';
            }

            if(!selector) {
                throw 'Missing jQuery selector';
            }

            if(formal) {
                msg = this.formal_greeting();
            }
            else {
                msg = this.greeting();
            }

            $(selector).text(msg);

            return this;
        }
    };

    Greetr.init = function(firstname, lastname, language) {
        var self = this;

        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';

        self.validate();
    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
