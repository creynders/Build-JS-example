/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50, laxbreak:true, laxcomma:true */

/**
 * see LICENSE for copyright license
 * built: 20120314131144
 * @author Camille Reynders
 * @version 1.0.0
 */

( function( $ ){
    "use strict";

    if ( ! $.hasOwnProperty( 'buildexample' ) ) {
        /**
         * @namespace
         * @name buildexample
         */
        $.buildexample = {
            VERSION : '1.0.0'
        };
    }

} ( this ) );

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



