import Feature from "../Feature/Feature";
import Price from "../Price/Price";

const Prices = () => {
    
    const reactData = [
        {
          id: 1,
          name: "Reactor",
          "features": [
            "Unlocking the secrets of React to build powerful web applications",
            
          ],
          title: "Mastering React",
          price: 29.99
        },
        {
          id: 2,
          name: "Reactiva",
          "features": [
            "Shaping the future of web development with innovative React solutions",
            
          ],
          title: "Empowering UI",
          price: 34.99
        },
        {
          id: 3,
          name: "Reactify",
          "features": [
            "Breaking boundaries with React to create cutting-edge user experiences",
            
          ],
          title: "Unleashing React",
          price: 39.99
        },
        
      ];
      
      
    return (
        <div className="m-10">
            <h2 className="text-4xl text-center font-bold">Best Prices</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                reactData.map((option, idx) => <Price key={idx} option={option}></Price>)
            }
            {
                reactData.map((feature, idx) => <Feature key={idx} feature ={feature}></Feature>)
            }
            </div>
        </div>
    );
};

export default Prices;