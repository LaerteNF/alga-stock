import React from 'react'

class ClassComponent extends React.Component<{ name: String }> {

    constructor(props: any){
        super(props)
        console.log('constructor reached')
    }

    state = {
        name: 'Mundo!!!!'
    }

    componentDidMount(){
        console.log('componentDidMount reached')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate reached')
    }

    render(){
        console.log('render reached')
        return <div>
            <p>name: { this.state.name }</p>
            <button onClick={()=> {
                this.setState( { name: 'Daniel'})
            }}>Click me</button>
        </div>
    }
}

export default ClassComponent