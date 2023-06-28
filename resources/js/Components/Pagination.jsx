import React from 'react'
import { Link, router } from '@inertiajs/react'

export default function Pagination({ links }) {
  function getClassName(active) {
    if (active) {
      return 'join-item btn mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white'
    } else {
      return 'join-item btn btn-active mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-white text-gray-700'
    }
  }

  return (
    links.length > 3 && (
      <div className="mb-4">
        <div className="flex justify-center items-center flex-wrap mt-8">
          {links.map((link, key) =>
            link.url === null ? (
              <div className="join mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded">
                {link.label.replace(/&raquo;|&laquo;/g, '')}
              </div>
            ) : (
              <Link className={getClassName(link.active)} href={link.url}>
                {link.label.replace(/&raquo;|&laquo;/g, '')}
              </Link>
            )
          )}
        </div>
      </div>
    )
  )
}
