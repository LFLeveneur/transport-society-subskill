const Banner = ({headerHeight}) => {
    return (
        <section className='banner'  style={{marginTop: headerHeight}}>
        <div className='banner-content'>
            <h1>Refrigerated vehicle rental</h1>
            <p>When you need to transport chilled or frozen products, Petit Forestier offers a full range of vehicles for hire on a short, medium or long-term basis.</p>
            <button>Download our brochure</button>
        </div>
      </section>
    );
}
export default Banner;