import React, { useEffect } from "react";
import BiblioCard from "../../Components/bibliocard/Bibliocard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BiblioItem from "./BiblioItem";
import Statistics from "./Statistic";
import "./Biblio.css";
import { getStatistics } from "../../actions/statsActions";
import { connect } from "react-redux";
const Biblio = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1600, min: 940 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 940, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const { getStats } = props;
  useEffect(() => {
    getStats();
    // Update the document title using the browser API
  }, [getStats]);
  return (
    <div className="home-biblio">
      <BiblioCard number={props.stats.total} unite={"Arme des Transmissions"} />
      <div className="container">
        <div className="row justify-content-center">
          <Statistics
            unite="Inspection"
            color="red"
            number={props.stats.uniteInsp}
          />
          <Statistics unite="CIT" color="green" number={props.stats.uniteCit} />
          <Statistics
            unite="ECT"
            color="orange"
            number={props.stats.initeEct}
          />
          <Statistics
            unite="BGE"
            color="orange"
            number={props.stats.uniteBge}
          />
          <Statistics
            unite="1°BST"
            color="blue"
            number={props.stats.uniteBst}
          />
          <Statistics
            unite="2° Bt"
            color="gray"
            number={props.stats.unite2Bt}
          />
          <Statistics
            unite="3° Bt"
            color="purpul"
            number={props.stats.unit3Bt}
          />
          <Statistics
            unite="7° Bt"
            color="jaune"
            number={props.stats.unite7Bt}
          />
        </div>
      </div>

      <h2 className="title-books">Dernièrement Ajoutés</h2>
      <div className="slider-books">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all 2.0"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {console.log(props.stats.lastOuvrages)}
          {props.stats.lastOuvrages
            ? props.stats.lastOuvrages.map((value) => (
                <BiblioItem
                  key={value.id}
                  title={value.titre}
                  selected={value.auteurs}
                  theme={value.theme}
                  classification={value.classification}
                  id={value.id}
                />
              ))
            : console.log("erreur")}
        </Carousel>
      </div>
    </div>
  );
};

const mapStateToProps = ({ statistics }) => ({
  loading: statistics.loading,
  error: statistics.error,
  stats: statistics.stats,
});

const mapDispatchToProps = {
  getStats: getStatistics,
};

export default connect(mapStateToProps, mapDispatchToProps)(Biblio);
