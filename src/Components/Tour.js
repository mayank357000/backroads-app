import Title from "./Title";
import { tours } from "../data";
const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title word1="featured" word2="Tours"></Title>

      <div className="section-center featured-center">
        {tours.map((ele)=>{
          const {id,date,location,des,country,days,cost,img}=ele;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{location}</h4>
                </div>
                <p>
                 {des}
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                   {country}
                  </p>
                  <p>{days} days</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Tour