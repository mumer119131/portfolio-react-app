'use client';

import React, { useState, useEffect, useRef } from 'react';
import { console_files, initialConsoleText, replies } from '@/data/console';
import Wrapper from '../wrapper/Wrapper';

interface TerminalProps {
  setIsTerminalOpen: (isOpen: boolean) => void;
  className?: string;
  setAboveWindow: (appName: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ setIsTerminalOpen, className, setAboveWindow }) => {
  const [command, setCommand] = useState('');
  const [previousCommands, setPreviousCommands] = useState<string[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [output, setOutput] = useState(initialConsoleText);
  const monitorScreenRef = useRef<HTMLDivElement>(null);
  const files = ['about_me.txt', 'contact_me.txt', 'projects.txt', 'how_to_hack_nasa.txt'];

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setPreviousCommands([...previousCommands, command]);
      setCurrentCommandIndex(previousCommands.length + 1);
      let newOutput = [...output, `$ ${command}`];

      if (command === 'ls') {
        newOutput.push(files.join('  '));
      } else if (command === 'clear') {
        newOutput = initialConsoleText;
      } else if (command.split(' ')[0] === 'cat') {
        if (files.includes(command.split(' ')[1])) {
          if (command.split(' ')[1] === 'how_to_hack_nasa.txt') {
            newOutput.push('Nah bro! Not this one 🤫, try some other files ....');
          } else {
            newOutput.push(...console_files[command.split(' ')[1]]);
          }
        }
      } else {
        const command_n = command.split(' ')[0];
        if (replies[command_n]) {
          newOutput.push(...replies[command_n]);
        } else {
          newOutput.push(`Command not found: ${command}`);
        }
      }

      setOutput(newOutput);
      setCommand('');
    } else if (e.key === 'ArrowUp') {
      setCommand(previousCommands[currentCommandIndex - 1]);
      setCurrentCommandIndex(currentCommandIndex - 1);
    } else if (e.key === 'ArrowDown') {
      if (currentCommandIndex === previousCommands.length - 1) {
        setCommand('');
        return;
      }
      setCommand(previousCommands[currentCommandIndex + 1]);
      setCurrentCommandIndex(currentCommandIndex + 1);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const possibleCommands = files.filter((file) =>
        file.startsWith(command.split(' ')[1] || '')
      );
      if (possibleCommands.length === 1) {
        setCommand(`cat ${possibleCommands[0]}`);
      }
    }
  };

  const onAppClick = () => {
    setAboveWindow('terminal');
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Wrapper
      setAboveWindow={setAboveWindow}
      setIsOpen={setIsTerminalOpen}
      appName="terminal"
      className={className}
    >
      {/* Console Screen */}
      <div
        onClick={onAppClick}
        id="monitorscreen"
        ref={monitorScreenRef}
        className="scrollbar p-4 h-96 overflow-y-auto font-mono font-mono-imp text-sm bg-gray-900 !overflow-auto"
      >
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre text-gray-100 font-mono-imp">
            {line.startsWith('$') ? (
              <span>
                <span className="text-green-400 font-mono-imp">$</span>
                <span className="font-mono-imp">{line.slice(1)}</span>
              </span>
            ) : (
              <span className="font-mono-imp">{line}</span>
            )}
          </div>
        ))}
        <div className="flex">
          <span className="text-green-400">$</span>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent outline-none text-gray-100 ml-2 font-mono-imp"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleCommand}
            placeholder=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Terminal;
