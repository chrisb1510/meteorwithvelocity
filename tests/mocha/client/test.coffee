if MochaWeb?
  MochaWeb.testOnly ()->
    describe "Test1", ()->
      it "should describe equality", ()->
        chai.assert.equal 5,5

