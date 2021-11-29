import React, { FC } from 'react';

interface Props {
  text?: string,
}

export const Detail: FC<Props> = ({ text }) => {
  return (
    <div>
      <div>Detail</div>
      <div>{text}</div>
    </div>
  )
}

export default Detail;