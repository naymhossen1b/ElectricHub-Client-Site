

const ProductSlider = () => {
    return (
        <div>
               <div>
      <div className="carousel w-full h-[50vh] rounded-md">
        <div id="item1" className="carousel-item w-full">
          <img src="https://i.ibb.co/Tc23h0j/hc1.jpg" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://i.ibb.co/QNyymyh/hc2.jpg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://i.ibb.co/3fRxTPt/hc3.jpg" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://i.ibb.co/w0qw1Y2/hc4.png" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
        </div>
    );
};

export default ProductSlider;