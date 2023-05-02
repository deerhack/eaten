const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

class EventController{
    static async index(req,res){
        try{
            const data = await prisma.event.findMany({})
            return res.status(200).json({success:true,data:data});
        }catch(error){
            console.log(error)
            return res.status(500).json({success:false,error:error})
        }

    }
    static async add (req,res){
        const data = res.locals.validated;
        try{
            const  created = await prisma.event.create({
                data:{
                    name:data.name,
                    start_time:data.start_time ||  new  Date(),
                    end_time:data.end_time,
                }
            })
            return res.status(200).json({success:true,data:created})
        }catch(error){
            console.log(error)
            return res.status(500).json({success:false,error:error})
        }

    }
    static async update(req, res) {
        const data = res.locals.validated;
        
        const eventId = req.params.id; // assuming the id of the event to update is in the request parameter 'id'
        try {
          const updated = await prisma.event.update({
            where: { id: eventId },
            data: {
              name: data.name,
              start_time: data.start_time || new Date(),
              end_time: data.end_time,
            },
          });
          return res.status(200).json({ success: true, data: updated });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ success: false, error: error });
        }
      }
      
    static async destroy(req,res){
        try {
            const deleted = prisma.event.delete({
                where:{
                    id:req.params.eventToDelete
                }
            })
            return res.status(200).json({success:true,deleted:deleted})
        } catch (error) {
            return res.status(500).json({success:false,error:error})
        }

    }
}

module.exports = EventController