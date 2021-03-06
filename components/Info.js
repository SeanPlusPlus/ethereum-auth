import React from 'react'

export const Info = ({message}) => {
  const refreshPage = () => {
    window.location.reload(false);
  }
 
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="text-4xl font-normal leading-normal mt-0 mb-2">Heads Up</h3>
        <p>
          <span role="img" aria-label="warn">⚠️</span> {message}
        </p> 
        <div className="modal-action">
          <label className="btn" onClick={refreshPage}>Close</label>
        </div>
      </div>
    </div>
  )
}