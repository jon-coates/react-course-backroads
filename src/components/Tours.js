import { tours } from "../data";
import Title from "./Title";
import Tour from "./tour";

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='Featured' subtitle='tours' />
      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
        ;
      </div>
    </section>
  );
};
export default Tours;
