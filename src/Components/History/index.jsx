// import React from "react";

const History = ({history}) => {
  return (
    <ul>{history.map((req, index) => <li key={index}>{req.method}:{req.url}</li>)}</ul>
  )
}

export default History