class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  setElementposition(){

    this.input.position(width/2-110,height/2-80)
    this.playButton.position(width/2-90,height/2-20)
    this.titleImg.position(120,60)
    this.greeting.position(width/2-200,height/2-100)

  }
  setElementstyle(){

    this.input.class("customInput")
    this.playButton.class("customButton")
    this.titleImg.class("gameTitle")
    this.greeting.class("greeting")

  }
  display(){
    this.setElementstyle()
    this.setElementposition()
    this.handleMousePressed()

  }
  handleMousePressed(){

    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      var message=`
      hello ${this.input.value()}
      </br>waiting for others to join
      `
      this.greeting.html(message)

    })

  }
}
