import React, { useRef } from 'react';

const AddTour = ({ closeAddTour }) => {
  const tourNameRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const headlinerRef = useRef();
  const openerRef = useRef();

  return (
    <>
      <div className='add-tour-layer'></div>
      <div className='add-tour'>
        <form className='add-tour-form' >
          <h2>New Tour</h2>
          <input 
            type='text'
            name='tour-name'
            placeholder='Tour Name'
            ref={tourNameRef}
          />

          <input 
            type='date'
            name='start-date'
            ref={startDateRef}
          />

          <input 
            type='date'
            name='end-date'
            ref={endDateRef}
          />

          <input 
            type='text'
            name='headliner'
            placeholder='Headliner'
            ref={headlinerRef}
          />

          <input 
            type='text'
            name='opener'
            placeholder='Opener'
            ref={openerRef}
          />

          <section className='module-buttons'>
            <button>
              Add Tour
            </button>
            <button 
              onClick={event => closeAddTour(event)}>
              Cancel
            </button>
          </section>
        </form>
      </div>
    </>
  )
}

export default AddTour;