import React, { FC } from 'react';

interface Props {
  text?: string,
}

export const Home: FC<Props> = ({text}) => {
  return(
    <div>
      <div>Home</div>
      <div>{text}</div>
    </div>
  )
}

export default Home;