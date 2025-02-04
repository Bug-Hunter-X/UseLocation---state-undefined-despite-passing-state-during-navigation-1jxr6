import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  console.log(location.state); //This will log undefined if there is no state

  return (
    <div>
      {/* ... */}
    </div>
  );
}

export default MyComponent;