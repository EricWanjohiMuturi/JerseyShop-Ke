import './App.css'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


function App() {

  const items = [
    {
        
        id: 1, 
        photo: "real_madrid.webp",
        name: "Real Madrid",
        price: 1190,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {

        id: 2, 
        photo: "milan.png",
        name: "Milan",
        price: 990,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 3, 
        photo: "chelsea.webp",
        name: "Chelsea",
        price: 990,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 4, 
        photo: "barcelona.png",
        name: "Barcelona",
        price: 1090,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 5, photo: "benfica.png",
        name: "Benfica",
        price: 890,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 6, 
        photo: "manchester.webp",
        name: "Manchester City",
        price: 1290,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 7, 
        photo: "bayern.webp",
        name: "Bayern",
        price: 1190,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 8, 
        photo: "psg.png",
        name: "PSG",
        price: 940,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 9, 
        photo: "ajax.webp",
        name: "Ajax",
        price: 890,
        active: false,
        quantity: 1, 
        isInBag: false
    }
];

const shopName = "Jersey Shop Made with React JS";

return (
  <>
    <h2 className='text-center font-bold'>{shopName}</h2>
    <section className="container mx-auto items flex flex-wrap justify-center gap-4">
      
        {/* product */}

        {items.map(item => 
        <Card className="mt-6 w-96 shadow-md" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          <CardHeader color="white" className="relative h-56" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            <img
              src={`./images/${item.photo}`}
              alt="card-image"
            />
          </CardHeader>
          <CardBody placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            <Typography variant="h5" color="blue-gray" className="mb-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              {item.name}
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              Ksh.{item.price}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            <Button className='mx-2' placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Add to Cart</Button>
            <Button placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Buy Now</Button>
          </CardFooter>
        </Card>
      )}  
        
        
    
    </section>
    <section className="summary">
        <strong>Order Details</strong>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1x Real Madrid</td>
                    <td>Ksh. 119.99</td>
                </tr>
                
                <tr>
                    <th>Total</th>
                    <th>Ksh. 119.99</th>
                </tr>
            </tbody>
        </table>
    </section>
  </>
)
}

export default App
