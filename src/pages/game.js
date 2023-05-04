import * as React from 'react'
import '../styles/reset.scss'
import '../styles/global.scss'
import Game from '../game/game'
import { Helmet } from 'react-helmet'

const SkellyGame = () => {
  return (
    <main>
      <Helmet>
        <title>Skelly Zone</title>
      </Helmet>
      <Game />
    </main>
  )
}

export default SkellyGame