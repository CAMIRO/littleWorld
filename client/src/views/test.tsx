import React, { useState, useRef } from 'react'

interface Person {
    firstName: string;
    lastName: string;
}
interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person?: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
 export const Test: React.FC<Props> = ({handleChange}) => {
   // useState
   const [count, setCount] = useState<number | null>(5);  
   // Objects
   const [object, setObject] = useState<{ text: string }>({ text: 'hello' });
   const inputRef = useRef<HTMLInputElement>(null)
   const divRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}

  
  