import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import { HexColorPicker } from "react-colorful";

const Settings = ({setAboveWindow, setIsOpen, className, setBackgroundColor }) => {
  const inputRef = React.useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBackgroundColor(url);
    }
  }
  const handleBackgroundLight = (color) => {
    document.documentElement.style.setProperty('--tv-flicker-color', color);
  }
  const handleBackgroundLight2 = (color) => {
    document.documentElement.style.setProperty('--tv-flicker-color-2', color);
  }

  return (
    <Wrapper setAboveWindow={setAboveWindow} setIsOpen={setIsOpen} appName='settings' className={className}>
        <div
            id="monitorscreen"
            className="scrollbar p-4 h-96 overflow-y-auto font-mono font-mono-imp text-sm bg-gray-900 !overflow-auto"
            >

        <div className='flex gap-8 flex-wrap'>
          {/* Background Color Setting */}
          <div>
              <h3 className="text-lg font-thin">Background</h3>
              <HexColorPicker onChange={setBackgroundColor} />
              <div className='flex gap-2'>
                <button onClick={()=>setBackgroundColor(null)} className='bg-gray-800 px-4 py-2 rounded-lg my-2'>Default</button>
                <button onClick={handleImageClick} className='bg-gray-800 px-4 py-2 rounded-lg my-2'>Choose Image</button>
              </div>
              <input type="file" accept="image/*" name="" id="" hidden ref={inputRef} onChange={handleImageChange}/>
          </div>
          
          
          {/* Background Color  */}
          <div className=''>
              <h3 className="text-lg font-thin">Background Light 1</h3>
              <HexColorPicker onChange={handleBackgroundLight} />
              <div className='flex gap-2'>
                <button onClick={()=>handleBackgroundLight("#fff")} className='bg-gray-800 px-4 py-2 rounded-lg my-2'>Default</button>
              </div>
          </div>
          
          {/* Background Color 2 */}
          <div className=''>
              <h3 className="text-lg font-thin">Background Light 2</h3>
              <HexColorPicker onChange={handleBackgroundLight2} />
              <div className='flex gap-2'>
                <button onClick={()=>handleBackgroundLight2("#fff")} className='bg-gray-800 px-4 py-2 rounded-lg my-2'>Default</button>
              </div>
          </div>

        </div>
        
        </div>
    </Wrapper>
  )
}

export default Settings