// React declarations
declare namespace React {
  interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }
  
  type Key = string | number;
  
  interface ReactNode {
    // ReactNode can be a ReactElement, ReactFragment, string, number, etc.
  }
  
  type FormEvent<T = Element> = {
    preventDefault(): void;
    target: T;
  };
  
  type ChangeEvent<T = Element> = {
    target: T;
    preventDefault(): void;
  };
  
  type ReactFragment = {} | ReactNodeArray;
  interface ReactNodeArray extends Array<ReactNode> {}
  type JSXElementConstructor<P> = ((props: P) => ReactElement<any, any> | null);
}

// JSX namespace
declare namespace JSX {
  interface Element extends React.ReactElement<any, any> { }
  
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Module declarations
declare module 'next/link';
declare module 'next/navigation';
declare module 'next/font/google';
declare module 'react-icons/fi';
declare module 'next';
declare module 'react';

// Additional project-specific declarations
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg'; 