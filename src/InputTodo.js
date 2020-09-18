import React from 'react'

const InputTodo = (props) => {
    // const { listitems } = props.listitems

    const listdata = props.listitems.map((value) => {
        return <div className="ui menu  icon input" key={value.key}>

            <input type="text" className="" style={{ background: 'green' }}value={value.text} onChange={(e) => {
                props.onEditClick(e.target.value, value.key, value.text)
            }} />

            <div className="right menu">
                <button
                    className="ui negative basic  button" onClick={() => {
                        props.onDeleteClick(value.key)
                    }}>Complete</button>

                <button
                    className="ui negative basic  button" onClick={() => {
                        props.onCompleteClick(value.key)
                    }}>Delete</button>
            </div>
        </div>


    })


    // const listItems = props.listData.map(item =>
    //     <div>
    //         {item.text}
    //     </div>)

    return (
        <>

            {listdata}
        </>

    )
}
export default InputTodo;