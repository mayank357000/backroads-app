import Title from "./Title";
import {services} from '../data';
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title word1="our" word2="services"></Title>

      <div className="section-center services-center">
        {services.map((ele)=>{
           const {id,text,des,classx}=ele;
           return (
             <article className="service" key={id}>
               <span className="service-icon">
                 <i className={classx}></i>
               </span>
               <div className="service-info">
                 <h4 className="service-title">{text}</h4>
                 <p className="service-text">{des}</p>
               </div>
             </article>
           );
        })}
      </div>
    </section>
  );
}
export default Services