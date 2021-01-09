import React, { useState } from "react";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try{
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=fc444b3a393c49eb99efd6f63d669444',
      );
      setData(response.data);
    } catch (e) {
      console.log(e)
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};

export default App
