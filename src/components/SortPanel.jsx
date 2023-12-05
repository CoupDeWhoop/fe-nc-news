import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSearchParams } from 'react-router-dom'

export default function SortPanel ({ order, toggleOrder }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  const path = `/articles/${topic ? `topic=${topic}` : ''}`

  const handleChange = (event) => {
    const newOrder = event.target.value
    toggleOrder(newOrder) //#blueMonday#
    updateParams('order', newOrder);
  };

  const updateParams = (param, value) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set(param, value);
    setSearchParams(newParams);
  }



    return (<div className="sort-panel">
        <button onClick={() => updateParams('sort_by', 'date')}><strong>Date</strong></button>
        <button onClick={() => updateParams('sort_by', 'comment_count')}><strong>Comment count</strong></button>
        <button onClick={() => updateParams('sort_by', 'votes')} ><strong>Votes</strong></button>
          <RadioGroup
              className="sort-panel-radio-switch"
              defaultValue="desc"
              name="radio-buttons-group"
              onChange={handleChange}
            >
          <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
          <FormControlLabel value="desc" control={<Radio />} label="Descending" />
        </RadioGroup>
    </div>
    )
}