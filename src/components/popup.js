import React from 'react'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <button className="butpop" onClick={()=> props.setTrigger(false)}>X</button>
            <h4 class="pop">{props.children}</h4>
        </div>
    ):"";
}

export default Popup
