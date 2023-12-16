import express from "express";

const router = express.Router();

//Create
router.post("/", async (req, res) => { 
    const newHotel = new Hotel(req.body);

    try { 
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    
    } catch (err) { 
        res.status(500).json(err);
    }
});

//Update
router.put("/:id", async (req, res) => { 
    

    try { 
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedHotel);
    
    } catch (err) { 
        res.status(500).json(err);
    }
});
export default router