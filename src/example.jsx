import { useState } from "react"

export default function Example() {
    const [numbers, setNumbers] = useState([1, 3, 5, 7, 9, 11, 13, 17]);
    const [listColor, setListColor] = useState("#000");

    return (
        <div>
            <form>
                <label htmlFor="colorInput">Pick a color for your numbers</label>
                <input type="color" name="colorInput" id="colorInput" onChange={(ev) => setListColor(ev.target.value)}/>
                <button>Apply Color</button>
            </form>
            <h2>Prime Numbers</h2>
            <ul>
                {numbers.map((number, index) => {
                    return <li style={{
                        color: listColor
                    }} key={index}>{number}</li>
                })}
            </ul>
        </div>
    )
}