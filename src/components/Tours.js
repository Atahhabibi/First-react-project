
import Title from './Title'
import SingleTours from './SingleTours'

const Tours = () => {
  return (
    <section className="section" id="tours">
    <Title title={'featured'} span={"tours"}/>

    <div className="section-center featured-center">

      <SingleTours/>

    </div>
  </section>
  )
}

export default Tours