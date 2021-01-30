import React from 'react';

interface IntErrorProps {
  msg: string;
}

export const Error: React.FC<IntErrorProps> = (props: any) => {
  return <div>{props.msg}</div>;
};
