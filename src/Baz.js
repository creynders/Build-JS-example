
/**
 * @author Camille Reynders
 */
( function( $ ){
    "use strict";

    if( $.buildexample.hasOwnProperty( 'Baz' ) ) {
        return;
    }

    var buildexample = {};

    /**
     * @class
     * @constructor
     */
    buildexample.Baz = function(){
        /**
         * @type String
         * @default 'qux'
         */
        this.qux = 'qux';
    };

    buildexample.Baz.prototype = {
        /**
         * @return {String} The value of {@link buildexample.Baz#qux}
         */
        getQux : function(){
            return this.qux;
        }
    };

    $.buildexample.Baz = buildexample.Baz;

} ( this ) );
