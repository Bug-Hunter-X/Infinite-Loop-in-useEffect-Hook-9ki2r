```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly includes 'count' as a dependency
    setCount(count + 1);
  }, [count]); 

  return <div>Count: {count}</div>;
}

export default MyComponent;
```