import React, { useState, useEffect } from 'react'
import './TestComponent.css'

function TestComponent (props: { name: string }){
    const [age, setAge] = useState(21)
    useEffect(() => {
        console.log('Component was created')
    }, [])

    useEffect(() => {
        console.log('Age has been update to: ' + age)
    }, [age])

    return <div className="TestComponent">
        Olá, { props.name }, { age }
        <button onClick={ () => {
            setAge(age + 1)
        }}>
            +
        </button>
    </div>
}
export default TestComponent