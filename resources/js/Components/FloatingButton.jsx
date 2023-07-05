import React from 'react'
import { GoHome } from 'react-icons/go'
import { Link } from '@inertiajs/react'

function FloatingButton() {
  return (
    <Link href={route('home')}>
      <button className="fixed bottom-4 right-4 bg-neutral text-white text-2xl p-4 rounded-full">
        <GoHome />
      </button>
    </Link>
  )
}

export default FloatingButton
