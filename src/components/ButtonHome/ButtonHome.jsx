import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export function ButtonHome({ from }) {
  const navigate = useNavigate()
  return <button onClick={() => navigate(from)}>Go back</button>
}
