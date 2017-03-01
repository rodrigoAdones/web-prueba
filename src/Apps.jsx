import React from 'react'

import AboutApp from './AboutApp.jsx'

export default class Apps extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const items = this.props.listOfServices
    const listItems = items.map((item) =>
      <AboutApp key={item.id} {...item} />
    )
    return (
      <section className='section2'>
        <div className='row'>
          <h3>Nuestras Apps</h3>
          <div className='caja-imagenes'>
            {listItems}
          </div>
        </div>
      </section>
    )
  }
}
