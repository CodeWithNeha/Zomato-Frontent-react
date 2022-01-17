import React from 'react'

export default function Form(props) {
    const myStyle = {
        marginLeft : "500px",
         borderRadius: '5px',
        borderColor: 'palevioletred',
         backgroundColor: '#ffcccc'
    }
    const highStyle = {
        marginTop : "60px"
    }
    const btnStyle={
        marginLeft: "10px"
    }
    return (
        <>
        <div style={highStyle}>
      <h1 className="stayText tw-bold">{props.text}</h1>
    </div>
    <form action="">
       <table>
           <tbody>
         <tr>
           <td><input size = "35" style={myStyle} type="text" placeholder="email@email.com" /></td>
           <td><button style={btnStyle} type="button" className="btn btn-danger ">Get Updates</button></td>
         </tr>
         </tbody>
       </table>
    </form>
    </>
    )
}
