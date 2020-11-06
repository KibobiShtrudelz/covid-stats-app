import { Link } from 'react-router-dom'

import paths from '../../paths'

import { Wrap, Button } from './home.styled'

const Home = () => (<Wrap>
  <Link to={paths.dashboard}>
    <Button>Load Covid Stats</Button>
  </Link>
</Wrap>)

export default Home
