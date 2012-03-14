/**
 * @author Camille Reynders
 * Date: 07/03/12
 * Time: 15:37
 */
describe( "buildexample.Foo", function(){
    var foo;
    beforeEach( function(){
        foo = new buildexample.Foo();
    });
    afterEach( function(){
        foo = undefined;
    });
    describe( "#getBar", function(){
        it("should return buildexample.Foo#bar", function(){
            expect( foo.getBar() ).toEqual( foo.bar );
        });
    });
} );