import express from 'express'
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express()

app.use(cors());
app.use(express.json());

// API Routes

app.get('/', (req, res) => {
    res.status(200).json({
        message: "server running"
    })
})

// POST: /api/v1/user/trip-details
app.post('/api/v1/user/trip-details', (req, res) => {

    const {destination, duration, travellingWith} = req.body

    const token = uuidv4();

    res.status(200).json({
        token: token,
        message: "Trip details fetched successfully"
    });
  });


// GET: /api/v1/user/trip-details  
app.get('/api/v1/user/trip-details', (req, res) => {

    res.status(200).json( [{
        place: 'Tokyo',
        fromAndtoDate: '27.01.2025 - 02.02.2025',
      }] );
  });

// GET: /api/v1/user/flight-details
app.get('/api/v1/user/flight-details', (req, res) => {

    res.status(200).json( [{
        dateAndtime: "26.01.2025, 10:50 am",
        sourceHeading: "DEL",
        sourceLocation: "Delhi, India",
        destinationHeading: "NRT",
        destinationLocation: "Narita, Japan",
        }] );
  });


// GET: /api/v1/user/accomodation-details
app.get('/api/v1/user/accomodation-details', (req, res) => {

    res.status(200).json([
        { id: 1, review: "4.0 Very Good", name: "Shinagawa Prince Hotel", image: "/assets/images/shinagawa-price-hotel.png", checkInTime: "26.01.2025, 11:15 pm", checkoutOutTime: "28.01.2025, 11:15 am", duration: "2 Nights", status: "Confirmed", statusLogo: "/assets/images/confirm-circle.png" }, 
        { id: 2, review: "4.1 Very Good", name: "Mercure Tokyo Hotel", image: "/assets/images/mercure-tokyo-hotel.png", checkInTime: "28.01.2025, 6:00 pm", checkoutOutTime: "30.01.2025, 11:15 am", duration: "2 Nights", status: "Pending", statusLogo: "/assets/images/pending-circle.png" }, 
        { id: 3, review: "4.3 Very Good", name: "Kangaroo Tokyo Hotel", image: "/assets/images/kangaroo-hotel-tokyo.jpg", checkInTime: "26.01.2025, 12:30 pm", checkoutOutTime: "28.01.2025, 11:25 am", duration: "2 Nights", status: "Confirmed", statusLogo: "/assets/images/confirm-circle.png" }
    ]);
  });


// GET: /api/v1/user/activities-details 
app.get('/api/v1/user/activities-details', (req, res) => {

    res.status(200).json([
        { id: 1,
        image: "/assets/images/senso-ji-temple.png",
        title: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
        time: "8:15 am Morning",
        duration: "3 hours",
        pickup: "From Hotel" 
        },
        { id: 2,
        image: "/assets/images/tokyo-sky-tree.png",
        title: "Tokyo Sky Tree",
        time: "1:00 pm Afternoon",
        duration: "3 hours",
        pickup: "From Nakamise Street" 
        },
        { id: 3,
        image: "/assets/images/kimono-wearing.png",
        title: "Kimono Wearing",
        time: "Anytime before 8:00pm",
        duration: "1-2 hours",
        pickup: "From Hotel" 
        }
    ]);
  });



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });