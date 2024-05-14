import ClientCard from '../../molecules/ClientCard/ClientCard'
import styles from './WhatClientsSay.module.css'
const WhatClientsSay = () => {

  const clientData=[
    {picture:"/src/assets/c3.png",
      words:"Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
      name:'John Does',
      location:"Washignton"
    },
    {picture:"/src/assets/c1.png",
    words:"Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
    name:'Thomas Lili',
    location:"New York"
  },
  {picture:"/src/assets/c2.png",
  words:"Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
  name:'Romi Rain',
  location:"London"
}
  ]
  return (
    <div className={styles.wrapper}>
        <h2>What are clients say</h2>
        <div className={styles.line}></div>

        <div className={styles.gridContainer}>
          {clientData.map((client)=>
          <ClientCard picture={client.picture} words={client.words} name={client.name} location={client.location}/>)}
        </div>

    </div>
  )
}

export default WhatClientsSay