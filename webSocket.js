import WebSocket from "ws";

let wss;
 export const socket = (server) =>{
    console.log("this is socket")
    if(!wss){
        wss = new WebSocket({server})
        wss.on('connection' , (ws) =>{
            console.log("connected to the window" +ws)

            ws.on('close', () => {
                        console.log('Client disconnected from chat window');
                      });
        })
    
    }

}