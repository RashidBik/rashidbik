import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

import { store } from '../../store';

const Like = ({updateLike}) =>
{
    const [like, setLike] = useState(false);
    const submitLike = () =>
    {
        // fetch({
        //     method: 'put',
        //     url: 'api://somewhere',
        //     body: 'liked',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        store[0].liked = true
        setLike(true)
        updateLike()
    }
  return (
    <div>
      <div onClick={submitLike}>
        { like ? <AiFillHeart/>:< AiOutlineHeart />}
      </div>
    </div>
  )
}

export default Like
