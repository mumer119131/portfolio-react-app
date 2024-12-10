import React from 'react'
import Wrapper from '../wrapper/Wrapper'

const Files = ({setIsFilesOpen, className, setAboveWindow}) => {
  return (
    <Wrapper setAboveWindow={setAboveWindow} setIsOpen={setIsFilesOpen} appName='files' className={className} >
            {/* Files Screen */}
            <div
            id="monitorscreen"
            className="scrollbar p-4 h-96 overflow-y-auto font-mono font-mono-imp text-sm bg-gray-900 !overflow-auto"
            >
            <div className="text-center text-gray-300">
                Content coming soon... 🥱
            </div>
            </div>
    </Wrapper>
  )
}

export default Files