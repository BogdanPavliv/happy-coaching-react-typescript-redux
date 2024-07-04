import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  enementCenter: boolean
}

const Button: React.FC<Props> = ({ children, enementCenter }) => {
  return (
    <a className={enementCenter ? "action__button element-center" : "action__button"} href="#">{children}</a>
  )
}

export default Button;
