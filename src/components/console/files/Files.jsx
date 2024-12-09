import React from 'react'
import Draggable from 'react-draggable'

const Files = ({setIsFilesOpen, className, setAboveWindow}) => {
  return (
    <Draggable bounds="parent" handle=".drag-handle">
        <div className={` text-gray-100 rounded-lg shadow-lg w-3/4 max-w-3xl top-[100px] translate-y-[20px] absolute ${className}`} onClick={()=>setAboveWindow("files")} onDrag={()=>setAboveWindow("files")}>
                            {/* Header */}
            <div className="bg-gray-700 p-3 flex items-center rounded-t-lg drag-handle" >
            <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={()=>setIsFilesOpen(false)}></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="flex-1 text-center text-sm font-semibold text-gray-400">
                Files
            </div>
            </div>
            {/* Console Screen */}
            <div
            id="monitorscreen"
            className="scrollbar p-4 h-96 overflow-y-auto font-mono font-mono-imp text-sm bg-gray-900 !overflow-auto"
            >
            <div className="text-center text-gray-300">
                Content coming soon... 🥱
            </div>
            </div>
    </div>
    </Draggable>
  )
}

export default Files