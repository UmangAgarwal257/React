const HEAD = (
    <div style={{
        width : "50px",
        height : "50px",
        borderRadius : "100%",
        border : "10px solid black",
        position : "absolute",
        top : "50px",
        right : "-30px"
    }}/>
)
const BODY = (
    <div style={{
        width : "10px",
        height : "100px",
        background : "black",
        position : "absolute",
        top : "119px",
        right : "0"
    }}/>
)
const RIGHT_ARM = (
    <div style={{
        width : "100px",
        height : "10px",
        background : "black",
        position : "absolute",
        rotate : "-30deg",
        top : "150px",
        right : "-100px",
        transformOrigin : "left bottom"
    }}/>
)
const LEFT_ARM = (
    <div style={{
        width : "100px",
        height : "10px",
        background : "black",
        position : "absolute",
        rotate : "30deg",
        top : "150px",
        right : "10px",
        transformOrigin : "right bottom"
    }}/>
)
const RIGHT_LEG = (
    <div style={{
        width : "100px",
        height : "10px",
        background : "black",
        position : "absolute",
        rotate : "60deg",
        top : "210px",
        right : "-90px",
        transformOrigin : "left bottom"
    }}/>
)
const LEFT_LEG = (
    <div style={{
        width : "100px",
        height : "10px",
        background : "black",
        position : "absolute",
        rotate : "-60deg",
        top : "210px",
        right : "0px",
        transformOrigin : "right bottom"
    }}/>
)

const BODY_PARTS = [HEAD,BODY,RIGHT_ARM,LEFT_ARM,RIGHT_LEG,LEFT_LEG,]

type HangmanDrawingProps = {
    numberOfGuesses : number
}


const HangmanDrawing = ({numberOfGuesses} : HangmanDrawingProps) => {
  return (
    <div style={{position : "relative"}}>
        {BODY_PARTS.slice(0,numberOfGuesses)}
        <div style={{height : "10px", width : "200px", background : "black", marginLeft : "120px"}}/>
        <div style={{height : "50px" , width : "10px", background : "black", position : "absolute", top : "0" , right : "0"}}/>
        <div style={{height : "400px", width : "10px" , background : "black" , marginLeft : "120px"}}/>
      <div style={{height : "10px", width : "250px", background : "black"}}/>
      
    </div>
  )
}

export default HangmanDrawing
