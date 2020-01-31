import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux'
import { getStuff } from './reducers/reducer1'

const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStuff())
  }, [dispatch])
  console.log(props.pokemons,'check')

  return (
    <div >
      Hello
    </div>
  );
}
const mapDispatchToProps = {
  getStuff
}
const mapStateToProps = (state) => {
  return {
    pokemons: state.stuff,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
