import React from 'react'

export const Table = ({ children }: React.PropsWithChildren) => (
  <table className='table'>{children}</table>
)

const Body = ({ children }: React.PropsWithChildren) => (
  <tbody className='table-body'>{children}</tbody>
)

const Row = ({ children }: React.PropsWithChildren) => (
  <tr className='table-row'>{children}</tr>
)

const Col = ({ children }: React.PropsWithChildren) => (
  <td className='table-col'>{children}</td>
)

Table.Body = Body
Table.Row = Row
Table.Col = Col
