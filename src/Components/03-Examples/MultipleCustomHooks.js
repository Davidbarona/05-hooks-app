
import { UseFetch } from '../../Hooks/UseFetch'

import '../02-UseEffect/SimpleForm.css'

export const MultipleCustomHooks = () => {

  const state =  UseFetch(`https://www.breakingbadapi.com/api/quotes/4`)
  console.log(state);
  return (
    <h1>Custom Hooks</h1>
  )
}
