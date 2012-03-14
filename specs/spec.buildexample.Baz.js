/**
 * @author Camille Reynders
 * Date: 07/03/12
 * Time: 15:37
 */
describe( "buildexample.Baz", function(){
    var baz;
    beforeEach( function(){
        baz = new buildexample.Baz();
    });
    afterEach( function(){
        baz = undefined;
    });
    describe( "#getQux", function(){
        it("should return buildexample.Foo#qux", function(){
            expect( baz.getQux() ).toEqual( baz.qux );
        });
    });
} );