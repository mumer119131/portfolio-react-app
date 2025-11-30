declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.jpeg' {
  const value: any;
  export default value;
}

declare module '*.webp' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const value: any;
  export default value;
}

declare module '*.gif' {
  const value: any;
  export default value;
}

declare module '*.pdf' {
  const value: any;
  export default value;
}

declare module 'react-tilt' {
  import { Component } from 'react';
  
  interface TiltProps {
    className?: string;
    options?: {
      max?: number;
      scale?: number;
      speed?: number;
      glare?: boolean;
      'max-glare'?: number;
    };
    children?: React.ReactNode;
    [key: string]: any;
  }
  
  export class Tilt extends Component<TiltProps> {}
}

declare module 'aos' {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  interface AOS {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const aos: AOS;
  export default aos;
}

declare module 'aos/dist/aos.css';

declare module 'react-colorful' {
  export interface ColorPickerBaseProps {
    color: string;
    onChange: (color: string) => void;
  }
  export const HexColorPicker: React.FC<ColorPickerBaseProps>;
}

declare module 'react-draggable' {
  import * as React from 'react';
  const Draggable: React.ComponentType<any>;
  export default Draggable;
}
