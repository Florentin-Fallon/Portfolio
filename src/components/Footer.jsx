import React from 'react'
import { info } from '../info/info'

function Footer() {
  return (
    <div>
      <footer
      className="bg-black text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-white">
        © 2023 Copyright :
        <a
          className="text-orange-400 "
          href={info.github}
        > {info.firstname}{info.lastname}</a>
      </div>
    </footer>
    </div>
  )
}

export default Footer