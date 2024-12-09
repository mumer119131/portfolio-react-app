import React, {useState} from 'react'
import { console_files, replies } from '../../../data/console';
import Draggable from 'react-draggable';

const Terminal = ({setIsTerminalOpen, className, setAboveWindow}) => {
    const [command, setCommand] = useState("");
      const [previousCommands, setPreviousCommands] = useState([]);
      const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
      const [output, setOutput] = useState([
        "   _____         ____ ___                     ",
        "  /     \\       |    |   \\_____   ___________ ",
        " /  \\ /  \\      |    |   /     \\_/ __ \\_  __ \\",
        "/    Y    \\     |    |  /  Y Y  \\  ___/|  | \\/",
        "\\____|__  / /\\  |______/|__|_|  /\\___  >__|   ",
        "        \\/  \\/                \\/     \\/        ",
        "",
        "Type 'ls' to list available files or 'clear' to reset and you can also \ntry some other commands 😥",
      ]);
      
      const files = ["about_me.txt", "contact_me.txt", "projects.txt", "how_to_hack_nasa.txt"];
    const handleCommand = (e) => {
        if (e.key === "Enter") {
          setPreviousCommands([...previousCommands, command]);
          setCurrentCommandIndex(previousCommands.length + 1);
          let newOutput = [...output, `$ ${command}`];
    
          if (command === "ls") {
            newOutput.push(files.join("  "));
          } else if (command === "clear") {
            newOutput = [
              "   _____         ____ ___                     ",
              "  /     \\       |    |   \\_____   ___________ ",
              " /  \\ /  \\      |    |   /     \\_/ __ \\_  __ \\",
              "/    Y    \\     |    |  /  Y Y  \\  ___/|  | \\/",
              "\\____|__  / /\\  |______/|__|_|  /\\___  >__|   ",
              "        \\/  \\/                \\/     \\/        ",
              "",
              "Type 'ls' to list available files or 'clear' to reset.",
            ];
            
          } else if(command.split(" ")[0] === "cat"){
            if(files.includes(command.split(" ")[1])){
                console.log(command.split(" ")[1]);
                if(command.split(" ")[1] === "how_to_hack_nasa.txt"){
                    newOutput.push("Nah bro! Not this one 🤫, try some other files ....");
                }else{
                    newOutput.push(...console_files[command.split(" ")[1]]);
                }

            }
          }
          else {
            const command_n = command.split(" ")[0];
            if (replies[command_n]) {
                newOutput.push(...replies[command_n]);
            }else{
                newOutput.push(`Command not found: ${command}`);
            }
          }
    
          setOutput(newOutput);
          setCommand("");
        }else if(e.key === "ArrowUp"){
            setCommand(previousCommands[currentCommandIndex - 1]);
            setCurrentCommandIndex(currentCommandIndex - 1);
        }else if(e.key === "ArrowDown"){
            if(currentCommandIndex === previousCommands.length - 1){
                setCommand("");
                return;
            }
            setCommand(previousCommands[currentCommandIndex + 1]);
            setCurrentCommandIndex(currentCommandIndex + 1);
        }else if(e.key === "Tab"){
            e.preventDefault();
            const possibleCommands = files.filter(file => file.startsWith(command.split(" ")[1] || ""));
            if (possibleCommands.length === 1) {
                setCommand(`cat ${possibleCommands[0]}`);
            }
        }
      };
  return (
    <Draggable bounds="parent" handle=".drag-handle">
        <div className={` text-gray-100 rounded-lg shadow-lg w-3/4 max-w-3xl absolute ${className}`} onClick={()=>setAboveWindow("terminal")} onDrag={()=>setAboveWindow("files")}>
                            {/* Header */}
            <div className="bg-gray-700 p-3 flex items-center rounded-t-lg shadow-lg drag-handle" >
            <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={()=>setIsTerminalOpen(false)}></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="flex-1 text-center text-sm font-semibold text-gray-400">
                Terminal
            </div>
            </div>
            {/* Console Screen */}
            <div
            id="monitorscreen"
            className="scrollbar p-4 h-96 overflow-y-auto font-mono font-mono-imp text-sm bg-gray-900 !overflow-auto"
            >
            {output.map((line, index) => (
                <div key={index} className="whitespace-pre text-gray-100 font-mono-imp">
                    {line.startsWith("$") ? (
                        <span>
                            <span className="text-green-400 font-mono-imp">$</span>
                            <span className='font-mono-imp'>{line.slice(1)}</span>
                        </span>
                    ) : (
                        <span className='font-mono-imp'>{line}</span>
                    )}
                </div>
            ))}
            <div className="flex">
                <span className="text-green-400">$</span>
                <input
                type="text"
                className="w-full bg-transparent outline-none text-gray-100 ml-2 font-mono-imp"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="Type a command..."
                />
            </div>
            </div>
    </div>
    </Draggable>
  )
}

export default Terminal