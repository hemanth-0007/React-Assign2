import './App.css'

import CardItem from './components/CardItem'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div>
    <h1 className="main-heading">Learn 4.O Technologies</h1>
    <p className="description">
      Hello this is hemanth i am a full stack developer
    </p>
    <div className="sub-card-container">
      <CardItem cardItemDetails={cardsList[0]} key={cardsList[0].id} />
      <CardItem cardItemDetails={cardsList[1]} key={cardsList[1].id} />
    </div>
    <div className="sub-card-container">
      <CardItem cardItemDetails={cardsList[2]} key={cardsList[2].id} />
      <CardItem cardItemDetails={cardsList[3]} key={cardsList[3].id} />
    </div>
  </div>
)

export default App
