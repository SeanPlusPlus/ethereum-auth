import React from 'react'

const href = 'https://github.com/SeanPlusPlus/ethereum-auth'

export const Footer = () => {
  return (
    <footer className="text-center pt-20">
      Check out the source on 
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="link link-primary pl-1"
      >
        GitHub
      </a>
    </footer> 
  )
}