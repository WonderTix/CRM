/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
/**
 * Copyright © 2021 Aditya Sharoff, Gregory Hairfeld, Jesse Coyle, Francis Phan, William Papsco, Jack Sherman, Geoffrey Corvera
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/
import {useState} from 'react';
import {Ticket} from '../../ticketing/ticketingSlice';
import format from 'date-fns/format';


interface EventInstanceSelectProps {eventInstances: Ticket[], eventInstanceSelected?: (dateShowing: Ticket) => void}
export default function EventInstanceSelect(props: EventInstanceSelectProps) {
  const [selectedId, setSelectedId] = useState(-1);
  const handleClick = (eventInstance: Ticket) => () => {
    setSelectedId(eventInstance.event_instance_id);
    if (props.eventInstanceSelected) props.eventInstanceSelected(eventInstance);
  };
  return (
    <select className='py-4 bg-zinc-700/50 text-white p-5 mt-5 mb-3 rounded-xl'>
      {props.eventInstances.map((s) =>
        <option key={s.event_instance_id} selected={s.event_instance_id===selectedId} onClick={handleClick(s)}>
          {format(s.date, 'hh:mm a')}
        </option>,
      )}
    </select>
  );
}

