import React from 'react'
import Score from "react-score-indicator";
import "./styles.css";
import { Box } from "./styled";

const GetDetail = () => {
  const state = {
    value: 2
  };
  return (
    <div>
      <h1>Range Indicator</h1>
      <Box>
        <Score
          value={this.state.value}
          maxValue={10}
          lineWidth={15}
          lineGap={2}
          stepColors={[]}
        />
      </Box>
    </div>
  )
}

export default GetDetail
