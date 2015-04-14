(function(){
    'use strict';

    $('#login').on('click', function() {
        var g = G$('John', 'Doe');

        $('#logindiv').hide();

        g.set_lang($('#lang').val()).html_greet('#greeting', true).log();
    });

}());
