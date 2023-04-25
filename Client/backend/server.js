const express = require('express');
const cors = require('cors');
const app = express(); 
const mongoose = require('mongoose');
const PilotData = require('./models/Pilots');
const FlightData = require('./models/Fights');
const AdminData = require('./models/Admins')

const PORT = 3000 || PROCESS.env.PORT;

app.use(cors())
app.use(express.json());

app.post('/addPilot',async (req,res)=>{
    const pilot = await addPilot(req.body.PilotName,req.body.LicenseID, req.body.Experience, req.body.Email);
    console.log("Pilot added");
    res.status(200).send(pilot);
});

app.post('/addFlight',async(req,res)=>{
    const flight = await addFlight(req.body.FlightDate,req.body.From,req.body.FromTime,req.body.To,req.body.ToTime,req.body.PilotID,req.body.Price);
    console.log("Flight added");
    res.status(200).send(flight);
});

app.get('/getAirplanes',async(req,res)=>{
    const data = await FlightData.find().populate('PilotID');;
    res.send(data);
});

app.get('/getPilots',async(req,res)=>{
  const data = await PilotData.find();
  res.send(data);
});

app.post('/AdminAuth',async(req,res)=>{
  const result = await AdminData.findOne({Email: req.body.Email});
  if(!result){
    res.send("DNE");
  }
  else{
    const pass = result.Password;
    if(pass && pass === req.body.Password){
      res.send('Ok');
    }
    else{
      res.send('Fail');
    }
}
})

app.post('/AddBookings',async(req,res)=>{
  await FlightData.updateOne({_id: req.body.id},{$push: {Bookings : req.body.email}});
  res.send("done")
})

const bootstrap = async () => {
    try {
      await mongoose.connect('mongodb+srv://ABhay2811:dbmsproject123@atlascluster.jfsrtpx.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("DB connected"));
      app.listen(PORT, async () => {
        console.log("Listening at ",PORT);
      });
    } catch (error) {
      console.log(error);
    }
  };

bootstrap();



const addPilot= async(_PilotName,_LicenseID,_Experience,_Email)=>{
    const pilot = await PilotData.create({
        PilotName: _PilotName,
        LicenseID: _LicenseID,
        Experience: _Experience,
        Email: _Email
    });
}

const addFlight = async(_FlightDate, _From,_FromTime,_To,_ToTime, _PilotID,_Price)=>{
    const flight = await FlightData.create({
        FlightDate:_FlightDate, 
        From:_From,
        FromTime: _FromTime,
        To:_To, 
        ToTime: _ToTime,
        PilotID: _PilotID,
        Price: _Price
    });
}

const verifyAdmin = async(_Email,_Password)=>{
    const pass = await AdminData.findOne({Email: _Email});
}

