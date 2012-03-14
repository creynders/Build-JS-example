
/**
 * @author Camille Reynders
 */


( function( $ ){
    "use strict";

    if( $.buildexample.hasOwnProperty( 'Foo' ) ) {
        return;
    }
    var buildexample = {};

    /**
     * @class
     * @constructor
     */
    buildexample.Foo = function(){
        /**
         * @type String
         * @default 'bar'
         */
        this.bar = 'bar';
    };

    buildexample.Foo.prototype = {
        /**
         * @return {String} The value of {@link buildexample.Foo#bar}
         */
        getBar : function(){
            return this.bar;
        }
    };

    $.buildexample.Foo = buildexample.Foo;

} ( this ) );



