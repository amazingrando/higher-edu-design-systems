/// <reference types="vite/client" />

declare module "*.png?w=*&format=*&as=picture" {
  const value: {
    sources: Array<{
      type: string;
      srcSet: string;
    }>;
    img: {
      src: string;
      width: number;
      height: number;
    };
  };
  export default value;
}

declare module "*.jpg?w=*&format=*&as=picture" {
  const value: {
    sources: Array<{
      type: string;
      srcSet: string;
    }>;
    img: {
      src: string;
      width: number;
      height: number;
    };
  };
  export default value;
}

declare module "*.svg?w=*&format=*&as=picture" {
  const value: {
    sources: Array<{
      type: string;
      srcSet: string;
    }>;
    img: {
      src: string;
      width: number;
      height: number;
    };
  };
  export default value;
}
