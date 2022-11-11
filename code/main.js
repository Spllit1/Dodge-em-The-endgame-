import kaboom from "kaboom"

// initialize context
kaboom({
  root: document.getElementById("canvas"),
  width: 500,
  height: 500,
  background: [237, 195, 43]
})

function RandNum(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// make basic button
function addButton(txt, p, f) {
	const btn = add([
		rect(240, 80, { radius: 8 }),
		pos(p),
		area(),
		scale(1),
		anchor("center"),
		outline(4),
	])
	btn.add([
		text(txt, {
      font: "joy"
    }),
		anchor("center"),
		color(0, 0, 0),
	])
	btn.onHoverUpdate(() => {
		const t = time() * 10
		btn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
		btn.scale = vec2(1.2)
		setCursor("pointer")
	})
	btn.onHoverEnd(() => {
		btn.scale = vec2(1)
		btn.color = rgb()
	})
	btn.onClick(f)
	return btn
}


// load assets
loadSprite("bean", "sprites/bean.png")
loadFont("joy", "sprites/joy.ttf")


scene("Menu", ()=>{
  onUpdate(() => setCursor("default"))
  add([
    text("Dodge em':", {
      font: "joy"
    }),
    color(244, 0, 0),
    pos(width()/2, 40),
    anchor("center")
  ])
  add([
    text("The endgame!", {
      font: "joy"
    }),
    color(255, 91, 41),
    pos(width()/2, 80),
    anchor("center")
  ])
  
  addButton("Play!", width()/2, () => debug.log("oh hi"))
  addButton("Credits", vec2(width()/2, 360) , () => debug.log("oh hi"))
})

go("Menu")

