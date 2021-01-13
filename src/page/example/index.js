import React, {useState, useCallback} from 'react'


const Example = () => {
  const [num, setNum] = useState(0);
  const callbackNum = useCallback(() => {}, [num])
  return (
    <div>
      {num}
      <button onClick={setNum(num + 1)}>add</button>
      <button onClick={() => {console.log(callbackNum)}}>add</button>
    </div>
  )
}

export default Example;