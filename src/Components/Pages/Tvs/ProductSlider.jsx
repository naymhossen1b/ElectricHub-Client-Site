

const ProductSlider = () => {
    return (
        <div>
               <div>
      <div className="carousel w-full h-[70vh] rounded-md">
        <div id="item1" className="carousel-item w-full">
          <img src="https://i.ibb.co/9tZgR1n/sli1.png" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://i.ibb.co/pZQTjxm/sli2.jpg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://i.ibb.co/n7bjFkH/sloi3.jpg" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://i.ibb.co/FHj4pNf/sli4.jpg" className="w-full" />
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