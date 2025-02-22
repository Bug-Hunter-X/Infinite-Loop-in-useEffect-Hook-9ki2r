```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the dependency array is empty
    setCount(count + 1);
  }, []); // Missing dependency: count

  return <div>Count: {count}</div>;
}

export default MyComponent;
```