import  { ReactNode,useState } from 'react';
interface Props{
	children:ReactNode;
	maxChars?:number;
}
function Expandable({children,maxChars=100}:Props){
	const [expanded, setExpanded] = useState(false);
	const toggleExpand = () => {
		setExpanded(!expanded);
	      };
	      const text1 = String(children);
	      if(text1.length<maxChars)return(<p>{children}</p>)
	const text = expanded?text1:text1.substring(0,maxChars);
	
return(<>
<p>{expanded?text:text}... <button onClick={toggleExpand}> {expanded?"Less":"More"}</button></p>

</>)
}

export default Expandable;