import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const state = location.state || {}; // Provide default object if state is undefined

  //Access properties safely
  const name = state.name || 'Guest';
  console.log(name);

  return (
    <div>
      <h1>Welcome, {name}!</h1>
    </div>
  );
}

export default MyComponent;