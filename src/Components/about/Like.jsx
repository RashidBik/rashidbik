import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import supabase from '../../connection/env';

const Like = () =>
{
  const [error, setError] = useState(false);
    const [like, setLike] = useState(false);
    const submitLike = async () =>
    {
      const { data, error } = await supabase
        .from('likes')
        .insert([{}]);
       if (error) {
        setError(true)
       } else {
        setLike(true)
      }
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
