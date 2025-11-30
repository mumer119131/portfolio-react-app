'use client';

import React, { useState, useEffect, useRef } from 'react';
import { console_files, initialConsoleText, replies } from '@/data/console';
import Wrapper from '../wrapper/Wrapper';

interface TerminalProps {
  setIsTerminalOpen: (isOpen: boolean) => void;
  className?: string;
  setAboveWindow: (appName: string) => void;
  openFile?: (fileName: string, content: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ setIsTerminalOpen, className, setAboveWindow, openFile }) => {
  const [command, setCommand] = useState('');
  const [previousCommands, setPreviousCommands] = useState<string[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [output, setOutput] = useState(initialConsoleText);
  const monitorScreenRef = useRef<HTMLDivElement>(null);
  const files = Object.keys(console_files);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setPreviousCommands([...previousCommands, command]);
      setCurrentCommandIndex(previousCommands.length + 1);
      let newOutput = [...output, `$ ${command}`];
      const cmd = command.trim().split(' ');
      const mainCmd = cmd[0].toLowerCase();
      const arg = cmd[1];

      if (mainCmd === 'ls') {
        newOutput.push(files.join('  '));
      } else if (mainCmd === 'clear') {
        newOutput = [];
      } else if (mainCmd === 'cat') {
        if (files.includes(arg)) {
          newOutput.push(...console_files[arg]);
        } else {
          newOutput.push(`cat: ${arg}: No such file or directory`);
        }
      } else if (mainCmd === 'code' || mainCmd === 'notepad') {
        if (files.includes(arg)) {
            if (openFile) {
                openFile(arg, console_files[arg].join('\n'));
                newOutput.push(`Opening ${arg}...`);
            }
        } else {
            newOutput.push(`code: ${arg}: No such file or directory`);
        }
      } else if (mainCmd === 'help') {
        newOutput.push(
          'Available commands:',
          '  ls        - List files',
          '  cat <file>- Display file content',
          '  code <file>- Open file in Notepad',
          '  clear     - Clear terminal',
          '  help      - Show this help message',
          '  whoami    - Who are you?',
          '  pwd       - Print working directory',
          '  exit      - Close terminal'
        );
      } else if (mainCmd === 'exit') {
        setIsTerminalOpen(false);
      } else {
        if (replies[mainCmd]) {
          newOutput.push(...replies[mainCmd]);
        } else {
          newOutput.push(`Command not found: ${command}`);
        }
      }

      setOutput(newOutput);
      setCommand('');
    } else if (e.key === 'ArrowUp') {
      if (currentCommandIndex > 0) {
        setCommand(previousCommands[currentCommandIndex - 1]);
        setCurrentCommandIndex(currentCommandIndex - 1);
      }
    } else if (e.key === 'ArrowDown') {
      if (currentCommandIndex < previousCommands.length - 1) {
        setCommand(previousCommands[currentCommandIndex + 1]);
        setCurrentCommandIndex(currentCommandIndex + 1);
      } else {
        setCommand('');
        setCurrentCommandIndex(previousCommands.length);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const cmd = command.split(' ');
      const partial = cmd[cmd.length - 1];
      const possibleMatches = files.filter((file) => file.startsWith(partial));
      
      if (possibleMatches.length === 1) {
        cmd[cmd.length - 1] = possibleMatches[0];
        setCommand(cmd.join(' '));
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

  // Auto-scroll to bottom
  useEffect(() => {
    if (monitorScreenRef.current) {
      monitorScreenRef.current.scrollTop = monitorScreenRef.current.scrollHeight;
    }
  }, [output]);

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
          <div key={index} className="whitespace-pre-wrap text-gray-100 font-mono-imp break-words">
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
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Terminal;
