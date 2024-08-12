import { useState, useTransition } from "react"

const Example = () => {
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    const [isPending, startTransition] = useTransition();
    const [loading, setloading] = useState(false)

    console.log(isPending)

    const handleClick = () => {
        // handle the state urgent 
        setCount(count + 1)

        setloading(true)

        //handle the state with some time

        startTransition(() => {
            setTimeout (() => {
                const arr = Array(2000).fill(1).map((a,i) => (20000 +count) - i)
                setItems(arr)
                setloading(false)
            },10000)
        })

    }
  return (
    <div>
    <button className="btn" onClick={handleClick}>{count}</button>
    {(isPending || loading) ? <p>Loading....</p> : null}
    {items.map((item,index)=> <li key={index}> {item} </li>)}  
    </div>
  )
}

export default Example
