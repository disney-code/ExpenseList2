import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai';
import React, { useState } from 'react';

// interface Props{
// 	onclick1:()=>void;
// }
function Like(){
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		setClicked(!clicked);
		console.log(clicked)
	      };
	if (!clicked) return (
<AiFillHeart color='#ff6b81' onClick={handleClick} size={20}/>
	);return <AiOutlineHeart onClick={handleClick} />
}

export default Like;