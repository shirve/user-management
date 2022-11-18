import React from 'react'

export const Card = ({ children }: React.PropsWithChildren) => (
  <div className='card'>{children}</div>
)

const Header = ({ children }: React.PropsWithChildren) => (
  <header className='card-header'>{children}</header>
)

const Content = ({ children }: React.PropsWithChildren) => (
  <div className='card-content'>{children}</div>
)

const Item = ({ children }: React.PropsWithChildren) => (
  <div className='card-content-item'>{children}</div>
)

const Footer = ({ children }: React.PropsWithChildren) => (
  <footer className='card-footer'>{children}</footer>
)

Content.Item = Item

Card.Header = Header
Card.Content = Content
Card.Footer = Footer
