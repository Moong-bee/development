import React from 'react'

import '../../css/form.scss';

const form = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    )
}

export default form
