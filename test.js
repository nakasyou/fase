class Test{
  getInfo(){
    return {
      id:"test",
      name:"test",
      blocks:[
        {
          opcode:"test",
          blockType: Scratch.BlockType.REPORTER,
          text:"test!"
        }
      ]
    }
  }
  test(){
    return 'test!!'
  }
}
Scratch.extensions.register(new Test());
